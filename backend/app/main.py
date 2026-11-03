from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Buscador inmobiliario", version="0.1.0")


class SearchProfile(BaseModel):
    operation: str = "alquiler"
    max_monthly_total_ars: int = 1_300_000
    min_rooms: int = 3
    min_surface_m2_exclusive: int = 60
    max_age_years_exclusive: int = 15
    requires_outdoor_space: bool = True
    accepts_pets: bool = True
    preferred_locations: list[str] = ["Ramos Mejía", "Haedo", "Lomas del Mirador"]
    preferred_property_types: list[str] = ["departamento", "PH", "casa"]
    garage_preferred: bool = True


PROFILE = SearchProfile()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "collection": "disabled"}


@app.get("/api/search-profile", response_model=SearchProfile)
def search_profile() -> SearchProfile:
    return PROFILE
