Erstelle einen Workflow für einen TGW KONTUR-Fehler:

IM110 - Ladeeinheit
- Ladeeinheit anlegen über Button "Neue LE"
  - LE-Typ=N1-N7 oder RMW
  - Wähle An-Platz=B11INB//PP001_ALL
    - Hinweis: LE-Nr wird im Anschluss generiert; Grund 1 LVS, Grund 2 LVS, Key wird nicht benötigt
- Ladeeinheit transportieren über Button "Transportieren"
  - An-Platz=B21RNL//G00_R0_F00_E00_K0_Z0
  - Platzsuche=CTT-Shuttleplatzsuche OK
    - Hinweis: Priorität, Key, Referenz Subsystem wird nicht benötigt

TCS110 - TLS-Aufträge
- Mit der LE-Nummer den TLS-Auftrag finden
- JSON mit den richtigen Werten zusammenbauen:
  - Hinweis:
    {
      "TAQ" :
      [
        {
          "Transportnummer" : "030000004494",
          "LENr" : "210100042347",
          "Zieladresse" : "B12SMU_MA001",
          "Gewicht" : null,
          "Erreichbarkeit" : 1,
          "Nio" :
         [
            {
              "NIOGrund" : "KONTUR",
              "Erlaeuterung" : "(KONTUR)  ;  No LUs with invalid Dimesnions can be stored , lhmnr:    LE: 223000010009, Quelle: B12SMU_MA001, Ziel: [Anz]5 ,z.B.:B21RNL_GA024"
            }
          ],
          "Status" : 5,
          "LETyp" : "N2",
          "LeerKZ" : null,
          "Klasse" : null,
          "SQ" : null,
          "LoopCount" : 0,
          "MaxLoopCount" : 3
        }
      ]
    }

IPC020
- Server "MFC_CTT_IMPORT" auswählen
- Nachricht mit Prozesstyp=MFC_CTT_PROCESS_TAQ und JSON senden

NIO110OK - Ladeeinheiten Differenzenklärung
- Prüfen, ob Fehlergrund erstellt wird

TCS110 - TLS-Aufträge
- Über den Button "Subsystem Auftrag" in den CTT110OK ausfliegen

CTT110OK - CTT-Aufträge
- Prüfen, abhängig von der erstellten JSON, ob in "Ziele"
  - ein neuer Schritt erstellt wurde und der alte deaktiviert wurde
  - kein neuer Schritt erstellt wurde, da bereits zum DIF-Platz gefahren wird






SMUQ:
- bestimmt Dimensionen eines Pakets
  - TGW prüft Dimensionen:
    - sendet "Ok", wenn Dimensionen verarbeitet werden können
    - sendet "KONTUR-Fehler", wenn Dimensionen nicht verarbeitet werden können
      - Tritt ein KONTUR-Fehler auf, dann Paket zu Decanting
  - WMS prüft Dimensionen:
    - sendet "Ok", wenn Dimensionen verarbeitet werden können
    - sendet "DIMENSION-Fehler", wenn Dimensionen nicht verarbeitet werden können
      - Tritt ein DIMENSION-Fehler auf, dann Paket zu Decanting

Weitere Hinweise:
- LE darf nicht in Bewegung sein
- CTT100OK
