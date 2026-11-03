from fastapi.testclient import TestClient
from app.main import app


def test_collection_is_disabled() -> None:
    response = TestClient(app).get("/health")
    assert response.status_code == 200
    assert response.json()["collection"] == "disabled"
