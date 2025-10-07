from typing import Annotated

from fastapi import Depends
from fastapi import FastAPI
from fastapi import HTTPException
from fastapi import Query
from sqlmodel import Session
from sqlmodel import create_engine
from sqlmodel import select

from src.db import Policy

# Create a SQLite database engine
engine = create_engine("sqlite:///database.db", connect_args={"check_same_thread": False})

# Dependency function to provide a database session
def get_session():
    with Session(engine) as session:
        yield session


# Type alias for injected DB session
SessionDep = Annotated[Session, Depends(get_session)]

# Create FastAPI application instance
app = FastAPI()  

# API Endpoint to get list of policies with pagination
@app.get("/")
def read_policies(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[Policy]:
    policies = session.exec(select(Policy).offset(offset).limit(limit)).all()
    return policies

# API Endpoint to get a specific policy by ID
@app.get("/policies/{policy_id}")
def read_policy(policy_id: int, session: SessionDep) -> Policy:
    policy = session.get(Policy, policy_id)
    if not policy:
        raise HTTPException(status_code=404, detail="Policy not found")
    return policy
