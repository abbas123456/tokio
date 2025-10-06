from datetime import date

from sqlmodel import Field
from sqlmodel import SQLModel


class Policy(SQLModel, table=True):
    id: int = Field(primary_key=True)
    policy_number: str = Field(index=True)
    policy_holder_name: str = Field()
    coverage_amount: int = Field()
    start_date: date = Field()
    end_date: date = Field()
    status: str = Field()