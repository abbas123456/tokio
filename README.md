# tokio

# Running the backend

## Install poetry
Install poetry by following the instructions at https://python-poetry.org/docs/#installation.

Once complete navigate to the backend folder and run:

```bash
$ poetry install
```

## Install the backend
This will create a new poetry virtualenv and install all dependencies required to run the application. Once complete run the following command and copy paste it's output to the terminal. e.g

```bash
$ poetry env activate
source /Users/mohammad/Library/Caches/pypoetry/virtualenvs/backend-STzX187m-py3.13/bin/activate
$ source /Users/mohammad/Library/Caches/pypoetry/virtualenvs/backend-STzX187m-py3.13/bin/activate
```

## Run the application
```bash
$ (backend-py3.13) fastapi run src/main.py
```

This will start a server on http://0.0.0.0:8000 ready to be consumed by the frontend.

