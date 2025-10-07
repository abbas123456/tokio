from typing import Annotated

from fastapi import Depends
from fastapi import FastAPI
from fastapi import HTTPException
from fastapi import Query
from sqlmodel import Session
from sqlmodel import create_engine
from sqlmodel import select

from src.db import Policy


engine = create_engine("sqlite:///database.db", connect_args={"check_same_thread": False})

def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]

app = FastAPI()


@app.get("/")
def read_policies(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[Policy]:
    heroes = session.exec(select(Policy).offset(offset).limit(limit)).all()
    return heroes


@app.get("/policies/{policy_id}")
def read_hero(policy_id: int, session: SessionDep) -> Policy:
    hero = session.get(Policy, policy_id)
    if not hero:
        raise HTTPException(status_code=404, detail="Policy not found")
    return hero