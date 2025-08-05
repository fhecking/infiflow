
Setup
- LKW liefert die Ware am Lager an
- Nach Ankuft übergibt LKW-Fahrer die Ware einem Leitstandsmitarbeiter

GR300 - 
- Daten des anliefernden LKW-Fahres werden erfasst
- Nach Abschluss wird im WMS eine Anlieferung gebildet

GR100 - Anlieferübersicht
- Erfasste Daten können hier erneut geprüft werden

Weiter
- LKW fährt zum vorgegebenen Tor und die Ware wird dort vereinnahmt:
  - Verinnahmung: Der Bestand des Artikels wird aufgenommen und auf Vollständigkeit und äußerliche Mängel geprüft. Im Anschluss wird die Ware gerüstet, d.h. für die Einlagerung vorbereitet, also z.B. von Paletten entnommen und/oder auf andere LEs umgepackt. Beim Rüsten wird die Ware digital erfasst und jede LE erhält eine neue LE-Nummer. Nach Abschluss des Rüstvorgangs wird die Ware einem Lagerbereich zugeordnet und ein Transport angestoßen.

GR400 - Vereinnahmung
- Ware wird mit diesem Dialog vereinnahmt. Die Vorbereitung nennt man rüsten.
- Anzahl der Behälter kann ausgewählt werden. Bspw. von einer Palette in Kartons.
  - Die Europalette steht noch am Rüstplatz; die Ware ist auf einer Ladeeinheit (LE).
    - Ladeeinheiten sind Datensätze, die konkrete Ladehilfsmittel (LHM) oder Behälter beschreiben. Diese besitzen eine eindeutige Idenifizierung und Abmessungen für die Einlagerungsinformationen. 

IM110 - Ladeeinheiten
- Hier werden die Informationen und Eigenschaften der Ladeeinheiten gelistet.

IM100 - Quanten

Quant: Ein Quant ist eine benennbare Menge eines bestimmten Materials mit gleichen Merkmalen auf einem Lagerplatz
- Menge Res. kann ein nicht abgeschlossener Auftrag sein
- Wenn Kennzeichen "In Bewegung", dann kann der Platz bereits ein Lagerplatz sein
  - Dies liegt daran, dass ein Transportauftrag angelegt wurde
  - In Bewegung/Maße gibt es den Von-Platz, der der Rüstplatz ist.

TCS100 - Transportaufgaben
- Jeder Transport im WMS wird als Transportaufgabe abgebildet


======
Prozesse, die durchlaufen werden, bevor sie Verladen werden können
- Bestandsverfügbarkeitsprüfung und Reservierung
- Auftragserfassung
- Klassifizierung: Durch die Klassifizierung werden verschiedene Positionen auf unterschiedliche Weise behandelt
- Kommisionerung: Das Zusammenstellen von Waren nach vorgegeben Aufträgen aus einem verfügbaren Gesamtsortiment

Anschließend:
- Ware wird verpackt
- Ware wird verladen
- Ware wird an einen Spediteur übergeben