"""Connector boundary.

Do not add browser automation here until a portal-specific authorization review
has been recorded in docs/PORTALES_Y_CUMPLIMIENTO.md.
"""

from dataclasses import dataclass


@dataclass(frozen=True)
class ConnectorStatus:
    source: str
    enabled: bool = False
    reason: str = "Pending authorized access review"


CONNECTORS = (
    ConnectorStatus("Mercado Libre Inmuebles"),
    ConnectorStatus("Argenprop"),
    ConnectorStatus("ZonaProp"),
)
