# Umfuhr Workflow

Erstelle einen Workflow "Umfuhr" mit folgenden Schritten:

IMI800 - Bestandsübernahme:
- Anlage von Bestand:
  - Auswahl des richtigen Bereich und Platz
    - e.g. Bereich=B21RNL; Platz=G01_R1_F01_E10_K3_Z1
  - Wähle die richtige Menge an Bestand aus
    - Hinweis: Sollte zu viel Menge für den Platz ausgewählt worden sein, gibt es ein Hinweis im Fehlertab
- Buche Bestand über den Button "buchen"
  - Hinweis: Die Ladeeinheit wird hierüber zugeordnet

GI200 - Auftragserfassung:
- Anlage eines Auftrags:
  - Fülle den Datensatz mit:
    - Klient = FBO
    - Auftragstyp=UMF
    - Kunde=B2BUMF4
- Anlage einer Auftragsposition:
  - Nutzung des Artikels, welcher im IMI800 erstellt wurde
    - Hinweis: Mengen müssen übereinstimmen
- Abschluss Erfassung:
  - Hinweis: Kopiere die AuftragsId für den nächsten Schritt
  - Über den Button "Abschluss Erfassung"


GI100OK - Auftragsübersicht:
- Suche des Auftrags:
  - Status des Auftrags kann sich sichtbar verändern von:
    - 02 - Freigabe AVV
    - 10 - Ende AVV
    - 34 - klassifiziert
      - Hinweis: wenn der Status = 25 - Fehler Reservierung, dann muss neuer Bestand angelegt werden und erneut über Button "Freigabe Reservieung" freigegeben werden.
  - Prüfung, ob der Auftrag in Status "34 - klassifiziert" ist

OB500OK - Manuelle Batchbildung:
- Batchtyp auf "UMF" setzen
  - Hinweis: dies führt zu einer Vordefinierten Batchbildung
- Im Feld "dyn. SQL" auf den erstellten Auftrag filtern
- Button "Vorschau" klicken:
  - Hier überprüfen, ob die Daten korrekt sind und bestätigen

OB100OK - Batch-Übersicht:
- Überprüfen, ob Batch erstellt wurde und im Status "20 - Warte auf Freigabe" ist
- Batch über Button "Freigabe Batch" freigeben
  - Hinweis: Status wechselt auf "30 - Batch freigegeben"

IPC020 - Server Konfigurationen:
- Auswahl des Server MFC_CTT_IMPORT
  - Button "Nachricht senden"
  - Auswahl des Prozresstyp=MFC_CTT_PROCESS_TAQ
  - Einfügen des richtig konfigurieren JSONs
    - Hinweis: Es gibt mehrere Möglichkeiten, wie das JSON aufgebaut sein 
    - Hinweis: JSON-Konfiguration:
{
 "TAQ" :
 [
   {
     "Transportnummer" : "030000004400",
     "LENr" : "220000115232",
     "Zieladresse" : "B41FBL_BF411",
     "Gewicht" : 1800,
     "Erreichbarkeit" : 1,
     "Nio" :
     [
     ],
     "Status" : 2,
     "LETyp" : "RMW",
     "LeerKZ" : 1,
     "Klasse" : null,
     "SQ" : null,
     "LoopCount" : 0,
     "MaxLoopCount" : 3
   }
 ]
}