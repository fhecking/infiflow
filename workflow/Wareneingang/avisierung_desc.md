# Wareneingang - Avisierung

Link: https://kscsglobal.sharepoint.com/:w:/s/LEX-TAS-1-OSP-DE/EYpvj36wk1BLs0CMJiAmwiwBhUIXBKlvck7HxAVplRkO0Q?e=9Ymaum&ovuser=87d6e06b-b166-4d90-9d35-c66398a67e9e%2Cflorian.hecking%40infios.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTA2MTIxNjQyMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D

Erstelle einen Workflow " Wareneingang Avisierung" mit folgenden Schritten:


AV200 - Manuelle Avisanlage
- Hint: Avise manuell anlegen
- Kopiere das Template mit der "Externe Tournummer"=MUSTER BUID"
  - Hinweis: Mit SQL in DB nach einem nutzbaren Artikel suchen: SELECT *
FROM Art_Article a, Ok_Article_Supplier_Asgmt s
where a.id_client = s.id_client
and a.id_article = s.id_article
and a.stat = '10'
and s.flg_active = '1';
  - Anpassung Avise:
    - Externe Tournummer eingeben
  - Anpassungen Artikel
    - Artikel anlegen
    - Artikelmenge anpassen
    - UUID für "Referenz 1" angeben
- Button "Abschluss Erfassen" drücken

AV100 - Avisübersicht
- Prüfen, ob Avis Status="10 - angelegt"

AV102 - Avispositionen
- Prüfen, ob Avisposition Status="10 - angelegt"

GR300OK - Lieferscheinerfassung
- Hint. Notwendiger Eintrag im WC200 von Arbeitsplatztyp=INBDEL
- GDIA-Workflow:
  - Klient=FBO auswählen
  - Button "Neu" zur Erfassung der Anlieferung
    - Hint: Kein ELS=elektronischer Lieferschein
  - Button "Neu" zur Verkehrsmitteleingabe
  - Fahrernahme=OPID
  - KFZ-Kennzeichen beliebig eingeben
  - Plombe eingeben, wenn notwendig
  - Neuware Sku-reine Kolli, Prio=09 auswählen
  - Palletieren -> "Weiter"
  - Einzelteilvereinnahmung -> "Weiter"
  - Toranlieferung auswählen
  - LieferscheinNr. eingeben
  - Datum Lieferschein eingeben
  - Lieferant auswählen
    - Hint: Muss der selbe Lieferant des Artikels sein (AV100)
  - Artikel auswählen und Menge eingeben
  - Zollstatus erfassen
  - Abschluss LS+VM

TM200 - Verkehrsmittel
- Verkehrsmittel andocken:
  - Zeitpunkt Andocken -> setzen
    - Status="20 - angedockt"
  - Zeitpunkt Start -> setzen
    - Status="30 - Bearbeitung gestartet"
    - Hint: Voraussetzung für den GR350OK



CPGR100OK - Übersicht Anlieferungen und Hofzustand
- Hint: Mit der Lieferscheinnummer kann der Fortschritt der Anlieferung überwacht werden
- Hint: Es kann ebenfalls das Tor geprüft werden

GR350OK - Entladung Verkehrsmittel
- Datensatz anhand der Lieferscheinnummer auswählen, die erstellt wurde
- Entladung starten

IM110 - Ladeeinheiten
- Hint: Um eine SMUQ-Nachricht im IPC020 zu senden wird eine Ladeeinheitsnummer benötigt, welche nicht verwendet wird. Die Nummer einer leeren LE reich nicht aus.
- 


IPC020 - Server Konfigurationen
  - Hinweis: Es gibt mehrere Möglichkeiten, wie das JSON aufgebaut sein. Erklärung: https://kscsglobal.sharepoint.com/:o:/s/LEX-TAS-1-OSP-DE/EjUyRCX0Ub5FjRXLkwS8cywBK0o8yZYEDSxsVFZZQkBKMQ?e=Pv3QTW
  - Hinweis: JSON-Konfiguration:
{
  "SMUQ" :
  [
    {
      "TM" : 22000003584,
      "LENr" : "210100041357",
      "Tor" : "B11TOR_AP101",
        "Gewicht": 967, 
        "Hoehe":350, 
        "Laenge":600, 
        "Breite":400,
      "Lieferantenetikett" :
      {
        "ART" : "7101111",
        "SIZ" : "3",
        "QTY" : 1,
        "ORD" : null,
        "DST" : "ILO",
        "TCN" : null,
        "SCN" : null,
        "EAN" : null,
        "LKZ" : 10001,
        "OVH" : null
      },
      "Zwischenziel" : "B12SMU_MA001",
      "SSCC" : null,
      "Barcodes" :
      [
      ]
    }
  ]
}