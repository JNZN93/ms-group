import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  manufactors = [
    {
      brand: "Somero",
      products: [
        {
          "url": "https://www.somero.com/products/sts-11hc-topping-spreader/",
          "image": "https://www.somero.com/wp-content/uploads/2025/04/Somero082724_346.jpg",
          "name": "STS-11HC Topping Spreader",
          "description_items": [
            "1,8 m breiter Kopf",
            "6,1 m Auslegerlänge (7 m Reichweite ab Reifen)",
            "Joystick-Steuerung - Antrieb, Lenkung, Ausleger, Rotation, Kopfbeladung & Streufunktionen",
            "Allradantrieb",
            "Zweirad-, Allrad- und Krebsgang-Lenkmodi",
            "360-Grad-Rahmenrotation",
            "Kubota V3307 Stage 5 Motor (74PS) / (55kW)",
            "Automatische Höhenkontrolle - Kopf nah an der Oberfläche halten um Staub zu reduzieren",
            "Schüttgut-Staubunterdrückungssystem",
            "Zusatzstromaggregat",
            "Kamera auf der rechten Seite",
            "Gewicht 8.437 kg (leer)",
            "Breite 2,24 m (Transportmodus)",
            "Länge 5,28 m (Transportmodus)",
            "Höhe 2,36 m",
            "Motor Kubota V3307 Stage 5 Motor (74PS) / (55kW)",
            "Selbstfahrend mit Allradantrieb und Hydraulikmotoren",
            "Streuerkopfbbreite 1,8 m",
            "Lenkung Zweirad-, Allrad- und Krebsgang-Lenkung"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/srs-4e-electric-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2025/04/SRS-4e_0001.png",
          "name": "SRS-4e - Elektrische Laser-Abziehmaschine",
          "description_items": [
            "Langlebiger 3-Phasen 48 VAC Elektromotor - leiser, emissionsfreier Betrieb",
            "Allradantrieb für Traktion auf jedem Untergrund",
            "Intelligente Lenkung dreht die Reifen zum gewünschten Winkel für hervorragende Manövrierfähigkeit",
            "Wählbare Lenkmodi: Zweirad-, Allrad- und Krebsgang für optimale Manövrierfähigkeit",
            "Kompaktes Design ohne Unterrahmen für bessere Sicht und Arbeitssicherheit",
            "Nutzt Somero®-Features wie Quick GradeSet System®, QuickPass, Soft Landing und mehr",
            "Komfortfunktionen wie LED-Arbeitsleuchten, LCD-Display mit Diagnosefunktion",
            "Kompatibel mit Somero® 3-D Profiler System®",
            "Schulungen über Somero Concrete Institute verfügbar",
            "Zubehör: Werkzeugkasten, Hochdruckreiniger, Lasersysteme, 3-D Profiler, etc.",
            "Gewicht 2.177 kg",
            "Länge 4,50 m (Transportmodus)",
            "Höhe 1,64 m",
            "Motor: Vanguard 48V, 7kWh Batterien (4 Stück)",
            "Standard-Abziehkopfbreite 3,45 m",
            "Auslegerlänge 5,48 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/skystrip-plywood-stripping-machine/",
          "image": "https://www.somero.com/wp-content/uploads/2025/01/Sky_Strip_1.jpg",
          "name": "SkyStrip Schalungsplatten-Abbaumaschine",
          "description_items": [
            "Fernbedienungsbetrieb - ScanReco Remote",
            "Intelligente Lenkung verhindert Komponentenschäden",
            "Lenkmodi: Zweirad-, Allrad- und Krebsgang",
            "Reduziert Verletzungsrisiko beim Schalungsabbau",
            "Reduziert Materialverschwendung um 50%",
            "Nur ein Operator benötigt",
            "Erhöhte Baustellensicherheit",
            "Gewicht: 1.113 kg (mit Hebebühne 1.213 kg)",
            "Breite: 91 cm",
            "Länge: 214 cm (Transportlänge)",
            "Höhe: 114 cm",
            "Motor: Honda GX390"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/srs-6s-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/08/SRS-6s-machine_360_013-scaled-1.jpg",
          "name": "SRS-6S Laser-Abziehmaschine",
          "description_items": [
            "Kopfverstellung für flexiblere Positionierung",
            "3,6 m Vibratorbreite für höhere Produktivität",
            "25 PS Kubota Dieselmotor (Tier 4 Final)",
            "Allradantrieb für beste Traktion",
            "Manuelle Kopfrotation für einfachen Transport",
            "Kippfunktion zur leichteren Reinigung",
            "Lenkmodi: Zweirad-, Allrad- und Krebsgang",
            "Nutzt Somero®-Features wie Quick GradeSet System®",
            "Kompatibel mit 3-D Profiler System®",
            "Gewicht: 2.336 kg",
            "Breite: 1,9 m",
            "Länge: 6,07 m (Transportmodus)",
            "Höhe: 1,8 m",
            "Motor: Kubota V1505, 24,8 PS Diesel",
            "Standard-Abziehkopfbreite: 4 m",
            "Auslegerlänge: 5,48 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/floor-levelness-system/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/Floor-Levelness-System.png",
          "name": "Bodenebenheits-System",
          "description_items": [
            "SCHULUNGSWERKZEUG FÜR NEUE UND ERFAHRENE BEDIENER: Neue Bediener lernen richtige Techniken für Stabilisatoreinstellung, Kopfeinsätze und Auslegergeschwindigkeit",
            "MAXIMALE LEISTUNG DER LASER-ABZIEHMASCHINE: Erfahrene Bediener können ihre Techniken verfeinern",
            "HILFT BEI PROBLEMEN MIT BODENQUALITÄT: Isoliert Probleme im Gießprozess"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/siteshape-system/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/siteshape1.jpg",
          "name": "Siteshape System",
          "description_items": [
            "Ein-Mann-Betrieb",
            "Schneller Aufbau mit Laser-Abziehmaschine",
            "Laser-Genauigkeit",
            "Kompatibel mit verschiedenen Planiergeräten",
            "Erhöhte Produktivität",
            "Reduzierter Personalbedarf",
            "Deutlich verbesserte Betonausbeute"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/3-d-concrete-profiler-system/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/3-D-Profiler.png",
          "name": "3-D Beton-Profilierer System",
          "description_items": [
            "Erhöhte Rentabilität",
            "Automatisches & präzises Verlegen auf konturierten Flächen",
            "Einfach zu erlernen",
            "Trimble Business Center Integration",
            "Kompatibel mit mehreren Somero® Laser-Abziehmaschinen",
            "Kann mit Planierraupe, Bulldozer oder anderen Maschinen geteilt werden"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/somero-line-dragon/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/products_photo_LineDragon.jpg",
          "name": "Somero Line Dragon",
          "description_items": [
            "Fernbedienung mit einfachen AA-Batterien",
            "Intelligente Lenkung schont Komponenten",
            "Lenkmodi: Zweirad-, Allrad- und Krebsgang",
            "Lastabhängige Hydraulik für optimale Leistung",
            "Rückstell-Lenkung",
            "Komfortfunktionen: LED-Arbeitsleuchten, Transportbefestigungen",
            "Erhöhte Baustellensicherheit",
            "Werkzeugkasten für Fernbedienung",
            "Schneller Zugang zum Hydraulikverteiler",
            "Horn verhindert Schlauchquetschungen",
            "Gewicht: 521,6 kg (Zieher) / 601 kg (Platzierer)",
            "Breite: 1,3 m",
            "Länge: 1,8 m (Zieher) / 1,9 m (Platzierer)",
            "Höhe: 1,1 m",
            "Motor: 11,7 PS Honda GX390"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/broom-cure-machine/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/broomcurehyrid.jpg",
          "name": "Besen- & Aushärtungsmaschine",
          "description_items": [
            "Hybrid aus S-15R (oben) und S-22EZ (unten)",
            "4,27 m Besen-Sprühbalken-Kopf",
            "Platz für 208-Liter-Fässer",
            "Dual Sonic Tracer für präzise Kopfführung",
            "Somero's Soft Landing und Self-Leveling System",
            "114-Liter Frischwassertank",
            "Gewicht: 4.876 kg",
            "Breite: 2,2 m",
            "Länge: 8,5 m (Transportmodus)",
            "Höhe: 2,24 m",
            "Motor: 49,6 PS Kubota D1803 Turbo Diesel"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/skyscreed-36/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/13-Sky-Creed0013-1.jpg",
          "name": "Skyscreed 36",
          "description_items": [
            "10,9 m Knickausleger",
            "2,4 m schwebender Hydraulik-Vibrationsabziehkopf",
            "360° Maschinen-/Kopfrotation",
            "Aufbauhilfe",
            "Zusatzstromaggregat",
            "Säulenschutz",
            "Hochdruckreiniger an Bord",
            "OASIS Laser-Steuerung",
            "Somero Quick GradeSet System™",
            "Gewicht: 4.717 kg",
            "Breite: 2,76 m (Transportmodus)",
            "Länge: 9,44 m (Transportmodus)",
            "Höhe: 2,72 m (Transportmodus)",
            "Motor: 57 PS Kubota"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-ps50-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/sps50_34view.jpg",
          "name": "S-PS50 Laser-Abziehmaschine",
          "description_items": [
            "2,43 m Laser-Abziehkopf",
            "Hydraulische Kopfrotation",
            "Lenkung: Allrad (Zweirad-, Allrad- und Krebsgang)",
            "Hochdruckreiniger mit Schlauchtrommel",
            "Hydrauliköl-Vorwärmung",
            "Heizpaket für Bediener",
            "Obere Rahmen-Seitenlagerung",
            "Gewicht: 9.979 kg",
            "Breite: 2,21 m",
            "Länge: 6,6 m (Fahrmodus, Ausleger eingefahren)",
            "Höhe: 2,48 m",
            "Bodenfreiheit: 27,94 cm",
            "Auslegerlänge: 15,24 m (vierstufiger Ausleger)",
            "Motor: 74 PS Kubota V3307 Tier 4f/Stage V",
            "Kopfbreite: 2,43 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/srs-4-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/Somero-SRS4-Concrete_Machine_A__0001.jpg",
          "name": "SRS-4 Laser-Abziehmaschine",
          "description_items": [
            "Kein Unterrahmen für 360° Sicht und Sicherheit",
            "Fernbedienungsbetrieb - ScanReco Remote",
            "Intelligente Lenkung schont Komponenten",
            "Lenkmodi: Zweirad-, Allrad- und Krebsgang",
            "Nutzt Somero® Soft Landing Feature",
            "Komfortfunktionen: LED-Arbeitsleuchten, optionaler Sitz",
            "Gewicht: 1.996 kg",
            "Breite: 1,85 m",
            "Länge: 4,35 m (Transportmodus)",
            "Höhe: 1,64 m",
            "Motor: Kubota DH 902 T4f Diesel oder DH 972 T4f Propan",
            "Standard-Abziehkopfbreite: 3,1 m",
            "Auslegerlänge: 5,48 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-10a-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/S-10A_Product-Image-1.jpg",
          "name": "S-10A Laser-Abziehmaschine",
          "description_items": [
            "Verbesserte Bodenqualität",
            "Erhöhte Rentabilität",
            "Optionaler Säulenschutz",
            "OASIS Laser-Steuerung",
            "Zentrale Bedienerposition für 360° Sicht",
            "Kompatibel mit 3-D Profiler System®",
            "Somero Quick GradeSet System™",
            "Gewicht: 3.402 kg",
            "Breite: 2 m",
            "Länge: 7 m (Transportmodus)",
            "Höhe: 2,1 m",
            "Motor: 35 PS Kubota Diesel",
            "Standard-Abziehkopfbreite: 3 m",
            "Auslegerlänge: 6 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-15r-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/products_photo_S15R.jpg",
          "name": "S-15R Laser-Abziehmaschine",
          "description_items": [
            "Verbesserte Bodenqualität",
            "Erhöhte Rentabilität",
            "Somero Quick GradeSet System™",
            "OASIS Laser-Steuerung",
            "Säulenschutz",
            "360° Maschinenrotation mit Mehrfachlenkung",
            "LCD-Display mit Diagnosefunktion",
            "Kompatibel mit 3-D Profiler System®",
            "Gewicht: 4.377 kg (mit 3 m Abziehkopf)",
            "Breite: 2 m",
            "Länge: 7,4 m (mit 3 m Abziehkopf, Transportmodus)",
            "Höhe: 2,1 m",
            "Motor: 44,3 PS Kubota V1505 Turbo Diesel",
            "Standard-Abziehkopfbreite: 3 m",
            "Optionale Kopfbreite: 2,4 m",
            "Auslegerlänge: 6 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-22ez-advanced-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/S-22EZ0003.jpg",
          "name": "S-22EZ (Advanced) Laser-Abziehmaschine",
          "description_items": [
            "Farb-LCD-Display mit Diagnosefunktion",
            "EZ Clean Abziehkopf*",
            "Kopf-Transportständer*",
            "Säulenschutz",
            "Hydraulische Kopfrotation",
            "360° Maschinenrotation",
            "Somero Quick GradeSet System™",
            "LED-Arbeitsleuchten*",
            "Integrierte Lagerung",
            "Automatische Drehzahlregelung",
            "Programmierbarer Quick Pass",
            "OASIS Laser-Steuerung",
            "Gewicht: 6.577 kg (mit 3,7 m Abziehkopf)",
            "Breite: 2,2 m",
            "Länge: 8,4 m (Transportmodus)",
            "Höhe: 2,5 m",
            "Motor: 65 PS Cummins oder 74 PS Kubota*",
            "Standard-Abziehkopfbreite: 4,44 m",
            "Optionale Kopfbreite: 5,02 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-28ez-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/s28ez_sideboom.jpg",
          "name": "S-28EZ Laser-Abziehmaschine",
          "description_items": [
            "7,62 m Teleskopausleger (2-Stufen)",
            "Über 20 Designverbesserungen",
            "Verbesserter Motorzugang",
            "Optionale Rückfahrkamera",
            "Optionale Fernbedienung",
            "Farb-LCD-Display mit Diagnosefunktion",
            "EZ Clean Abziehkopf*",
            "Säulenschutz",
            "360° Maschinenrotation",
            "Hydraulik-Hochdruckreiniger (207 bar)*",
            "Somero Quick GradeSet System™",
            "Gewicht: 8.164 kg (mit 3,7 m Abziehkopf)",
            "Breite: 2,2 m",
            "Länge: 9,67 m (Transportmodus)",
            "Höhe: 2,67 m",
            "Motor: 74 PS Kubota Stage 5",
            "Standard-Abziehkopfbreite: 3,7 m",
            "Optionale Kopfbreite: 4,3 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/copperhead-xd-3-0/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/1-Copperhead0005-2.jpg",
          "name": "Copperhead XD 3.0",
          "description_items": [
            "Verbesserte Bodenqualität",
            "Erhöhte Rentabilität",
            "Weniger Arbeitsunfälle",
            "Somero Quick GradeSet System™",
            "Säulenschutz",
            "CBSSR Laser-Steuerung",
            "Fernjustierung",
            "Leicht und wendig",
            "Einfacher Auf- und Abbau",
            "Verarbeitet ebene und geneigte Flächen",
            "Kompatibel mit 3-D Profiler System®",
            "Gewicht: 386 kg",
            "Breite: 91 cm",
            "Länge: 2,7 m",
            "Höhe: 1,1 m",
            "Motor: 11,7 PS Honda GX390 oder 10,3 PS Diesel Kohler KD440",
            "Standard-Abziehkopfbreite: 3,1 m",
            "Optionale Kopfbreite: 2,4 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/mini-screed-c/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/products_photo_MiniScreedC.jpg",
          "name": "Mini Screed C",
          "description_items": [
            "Verbesserte Bodenqualität",
            "Erhöhte Rentabilität",
            "Säulenschutz",
            "Leicht und wendig",
            "Passt in die Ladefläche der meisten Pickups",
            "CBSSR Laser-Steuerung",
            "Verarbeitet ebene und geneigte Flächen",
            "Auto-Leveling Kopf",
            "Kompatibel mit 3-D Profiler System®",
            "Gewicht: 248 kg",
            "Breite: 77,5 cm",
            "Länge: 1,9 m",
            "Höhe: 1,1 m",
            "Motor: 7,9 PS Honda GX240",
            "Standard-Abziehkopfbreite: 2 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-158c-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/5-158-C_0000-1.jpg",
          "name": "S-158C Laser-Abziehmaschine",
          "description_items": [
            "Ein-Mann-Bedienung",
            "Abziehen in alle Richtungen",
            "4-Funktions-Bedienung",
            "Automatisches Soft Landing",
            "Sanfter Vibrationsstart",
            "Quick Pass Funktion",
            "Geeignet für Stahlmatten, Heizrohre, Eislaufbahnen etc.",
            "Motor: 20,8 PS Honda GX630",
            "Allradantrieb mit Proportional-Joystick",
            "Reifen: 80/100 x 21\" Motorradreifen",
            "Länge: 2,96 m",
            "Breite: 2,55 m (Gesamtkopfbreite)",
            "Höhe: 1,34 m (ohne Mast)",
            "Gewicht: 658 kg (mit Abziehkopf)"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-940-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/products_photo_S940.jpg",
          "name": "S-940 Laser-Abziehmaschine",
          "description_items": [
            "Verbesserte Bodenqualität",
            "Erhöhte Rentabilität",
            "Somero Quick GradeSet System™",
            "Schneckenabziehkopf für Stahlmatten, Heizrohre etc.",
            "Rechen-/Feinplanierkopf",
            "Automatische Ventilkalibrierung",
            "Optionale drehbare Kopftransportrollen",
            "Arbeitet mit niedrigen Fließfähigkeiten (ab 8,9 cm)",
            "Kompatibel mit 3-D Profiler System®",
            "Gewicht: 805 kg",
            "Breite: 1,5 m (Transportmodus)",
            "Länge: 3,4 m (mit Abziehkopf)",
            "Höhe: 1,5 m (Transportmodus)",
            "Motor: 22 PS Honda GX690 oder 24,8 PS Kubota DH902 Diesel",
            "Standard-Abziehkopfbreite: 2,4 m",
            "Optionale Kopfbreite: 3 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-940e-electric-laser-screed/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/s940e-img-1.png",
          "name": "S-940E Elektrische Laser-Abziehmaschine",
          "description_items": [
            "8 Stunden Laufzeit",
            "3.250 m² pro Ladung*",
            "4 Stunden Ladezeit (240V)",
            "10 Stunden Ladezeit (120V)",
            "Robuste Li-Ion-Batterien für Baumaschinen",
            "Einfacher Batteriewechsel",
            "Leiser, abgasfreier Betrieb",
            "Benutzerfreundliches Design",
            "Kosteneffizient langfristig",
            "Gewicht: 885 kg",
            "Breite: 1,5 m (Transportmodus)",
            "Länge: 3 m (Transportmodus)",
            "Höhe: 1,5 m (ohne Masten)",
            "Batterien: 3x 7 kWh (48V)",
            "Standard-Abziehkopfbreite: 3 m",
            "Vibratorbreite: 3,05 m"
          ],
          "models": []
        },
        {
          "url": "https://www.somero.com/products/s-485/",
          "image": "https://www.somero.com/wp-content/uploads/2024/07/s485-img-1.png",
          "name": "S-485 Laser-Abziehmaschine",
          "description_items": [
            "Verbesserte Bodenqualität",
            "Erhöhte Rentabilität",
            "Somero Quick GradeSet System®",
            "Leicht und vielseitig",
            "Für erhöhte Platten und ebene Flächen",
            "Für Stahlmatten, Eislaufbahnen, Fußbodenheizungen etc.",
            "Allradantrieb",
            "Säulenschutz",
            "OASIS Laser-Steuerung",
            "Kompatibel mit 3-D Profiler System®",
            "3 m hydraulischer Abziehkopf (20% mehr Produktivität)",
            "Gewicht: 502 kg",
            "Breite: 2,5 m",
            "Länge: 2,7 m",
            "Höhe: 1,3 m",
            "Motor: 20,8 PS Honda GX630",
            "Standard-Abziehkopfbreite: 3 m",
            "Optionale Kopfbreite: 2,4 m"
          ],
          "models": []
        }
      ]
    },
    {
      brand: "Barikell",
      products: [
        {
          "url": "https://www.barikell.it/prodotto/manico-lungo/",
          "name": "Manico Lungo",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/1083-MANICO-LUNGO-mini-023.jpg",
          "description_items": [
            "4-90 / 4-120 benzina Art. 1083",
            "4-90 / 4-120 diesel Art. 1087",
            "4-90 / 4-120 elettriche Art. 1746"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/manico-pieghevole/",
          "name": "Manico pieghevole",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/1744-MANICO-PIEGHEVOLE-1.jpg",
          "description_items": [
            "4-90 / 4-120 benzina Art. 1744",
            "4-90 / 4-120 elettriche Art. 1321"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/cerchio-di-protezione-apribile/",
          "name": "Cerchio di protezione apribile",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/cerchioapribile-700x525.jpg",
          "description_items": [
            "Ø 900 Art. 1371",
            "Ø 1200 Art. 1372"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/cerchio-stabilizzatore/",
          "name": "Cerchio stabilizzatore",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/0849-CERCHIO-STAB-4-120-1-700x787.jpg",
          "description_items": [
            "Ø 900 Art. 10112",
            "Ø 1200 Art. 0849",
            "5-120 Art. 10159"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/gancio-sollevamento/",
          "name": "Gancio sollevamento",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/ganciosollevamento.jpg",
          "description_items": [
            "4-60 / 4-75 Art. 1368",
            "4-90 / 4-120 Art. 1302"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/manico-corto-quick-pitch/",
          "name": "Manico corto quick pitch",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/1-MANICO-b-QUICK-PITCH-scaled-700x467.jpg",
          "description_items": [
            "4-90 / 4-120 Art. 1242"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/manico-lungo-quick-pitch/",
          "name": "Manico lungo quick pitch",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/1-MANICO-b-QUICK-PITCH-scaled-700x467.jpg",
          "description_items": [
            "4-90 / 4-120 Art. 1244"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/sistema-di-trasporto/",
          "name": "Sistema di trasporto",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3165-L-KIT-RUOTE-mini-016-700x600.jpg",
          "description_items": [
            "Art. 3129 – Sistema di trasporto mobile completo di due ruote per il trasporto di frattazzatrici 4-90 / 4-120",
            "Art. 3130 – Solo attacco per sistema di trasporto mobile",
            "Art. 3131 – Solo ruota per sistemi di trasporto",
            "Art. 3132 – Solo attacco per sistema di sollevamento fisso",
            "Art. 3133 – Sistema di trasporto fisso completo di due ruote per il trasporto di frattazzatrici 4-90 / 4-120"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/gancio-di-sollevamento-g/",
          "name": "Gancio di sollevamento (G)",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3316Y_15-PART-GANCIO-mini-040-700x467.jpg",
          "description_items": [
            "3392 – OL90 / MK8-75",
            "3398 – OL120 / MK8-90",
            "3393 – MK8-120",
            "3395 – OL120 HCS / MK8-90 HCS / MK8-120 HCS / MK10-90 HCS / MK10-120 HCS",
            "3391 – MK12-160 HCS LIGHT",
            "13099 – MK12-160 HCS HEAVY DUTY"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/variatore-di-velocita-15/",
          "name": "Alta velocità",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/dashboard_5628701.png",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/telaio-di-protezione-apribile-a/",
          "name": "Telaio di protezione apribile (A)",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/telaio-doppia.jpg",
          "description_items": [
            "1307 – OL90",
            "1306 – OL120 / OL120 HCS",
            "1305 – MK8-90 / MK8-90 HCS",
            "0972 – MK8-120",
            "0902 – MK8-120 HCS"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/carrelli-trasportatori/",
          "name": "Carrelli trasportatori",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3277-carrello-trasportatore.jpg",
          "description_items": [
            "3277 – OL90 / MK8-90 / MK10-90",
            "3317 – OL120 / MK8-120 / MK10-120"
          ],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/palette/",
          "name": "Palette finish",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/4200-PALETTE-MOSQUITO-mini-053-700x374.jpg",
          "description_items": [],
          "models": [
            {
              "Art.": "4200",
              "Macchine compatibili": "Moskito 4-60",
              "Peso Kg": "2,300"
            },
            {
              "Art.": "4205",
              "Macchine compatibili": "Moskito 6-60",
              "Peso Kg": "3,240"
            },
            {
              "Art.": "4210",
              "Macchine compatibili": "Moskito 6-60 tipo vecchio",
              "Peso Kg": "2,686"
            },
            {
              "Art.": "4215",
              "Macchine compatibili": "Moskito 4-75",
              "Peso Kg": "2,972"
            },
            {
              "Art.": "4220",
              "Macchine compatibili": "Moskito 6-75",
              "Peso Kg": "4,400"
            },
            {
              "Art.": "4223",
              "Macchine compatibili": "4-80 / MK8-75",
              "Peso Kg": "3,694"
            },
            {
              "Art.": "4225",
              "Macchine compatibili": "4-90 / OL90",
              "Peso Kg": "4,680"
            },
            {
              "Art.": "4228",
              "Macchine compatibili": "5-90",
              "Peso Kg": "5,800"
            },
            {
              "Art.": "4230",
              "Macchine compatibili": "4-120",
              "Peso Kg": "6,272"
            },
            {
              "Art.": "4234",
              "Macchine compatibili": "5-120",
              "Peso Kg": "7,720"
            },
            {
              "Art.": "4240",
              "Macchine compatibili": "MK8-90",
              "Peso Kg": "5,502"
            },
            {
              "Art.": "4238",
              "Macchine compatibili": "MK10-90",
              "Peso Kg": "6,880"
            },
            {
              "Art.": "4235",
              "Macchine compatibili": "OL120 / MK8-120",
              "Peso Kg": "7,438"
            },
            {
              "Art.": "4239",
              "Macchine compatibili": "MK10-120",
              "Peso Kg": "9,300"
            },
            {
              "Art.": "4245",
              "Macchine compatibili": "MK12-160",
              "Peso Kg": "14,574"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/palette-combinate/",
          "name": "Palette combi",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/4253-COMBI-SPECIAL-4_90-mini-069-700x329.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4250",
              "Macchine compatibili": "4-90 / OL90",
              "Peso Kg": "5,718"
            },
            {
              "Articolo": "4251",
              "Macchine compatibili": "5-90",
              "Peso Kg": "7,6000"
            },
            {
              "Articolo": "4253",
              "Macchine compatibili": "4-90 / OL90 / MK8-90 speciali",
              "Peso Kg": "6,120"
            },
            {
              "Articolo": "4255",
              "Macchine compatibili": "4-120",
              "Peso Kg": "7,650"
            },
            {
              "Articolo": "4256",
              "Macchine compatibili": "4-120 speciali",
              "Peso Kg": "7,778"
            },
            {
              "Articolo": "4254",
              "Macchine compatibili": "MK12-160 speciali",
              "Peso Kg": "12,520"
            },
            {
              "Articolo": "4258",
              "Macchine compatibili": "4-80 / MK8-75",
              "Peso Kg": "3,648"
            },
            {
              "Articolo": "4260",
              "Macchine compatibili": "OL120 / MK8-120",
              "Peso Kg": "8,382"
            },
            {
              "Articolo": "4259",
              "Macchine compatibili": "OL120 / MK8-120 speciali",
              "Peso Kg": "8,468"
            },
            {
              "Articolo": "4261",
              "Macchine compatibili": "MK10-120",
              "Peso Kg": "10,480"
            },
            {
              "Articolo": "4265",
              "Macchine compatibili": "MK8-90",
              "Peso Kg": "6,268"
            },
            {
              "Articolo": "4266",
              "Macchine compatibili": "MK8-90 speciali",
              "Peso Kg": "6,300"
            },
            {
              "Articolo": "4264",
              "Macchine compatibili": "MK10-90",
              "Peso Kg": "7,875"
            },
            {
              "Articolo": "4268",
              "Macchine compatibili": "MK12-160 speciali",
              "Peso Kg": "12,520"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/golden-blades/",
          "name": "Palette golden",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/4225-G2-GOLD-490-mini-022-700x318.jpg",
          "description_items": [],
          "models": [
            {
              "Art.": "4225G",
              "Descrizione": "Palette 4-90",
              "Peso Kg": "5,042"
            },
            {
              "Art.": "4228G",
              "Descrizione": "Palette 5-90",
              "Peso Kg": "6,310"
            },
            {
              "Art.": "4230G",
              "Descrizione": "Palette 4-120",
              "Peso Kg": "6,700"
            },
            {
              "Art.": "4234G",
              "Descrizione": "Palette 5-120",
              "Peso Kg": "8,36"
            },
            {
              "Art.": "4250G",
              "Descrizione": "Combi 4-90",
              "Peso Kg": "5,750"
            },
            {
              "Art.": "4251G",
              "Descrizione": "Combi 5-90 speciali",
              "Peso Kg": "7,190"
            },
            {
              "Art.": "4255G",
              "Descrizione": "Combi 4-120",
              "Peso Kg": "7,744"
            },
            {
              "Art.": "4254G",
              "Descrizione": "Combi 5-120 speciali",
              "Peso Kg": "9,680"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/frattazzi/",
          "name": "Frattazzi Floating",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/4165-FRATTAZZO-120-SX-mini-052-700x347.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4148",
              "Macchine compatibili": "4-80 / MK-75",
              "Spessore mm": "3",
              "Peso Kg": "6.698"
            },
            {
              "Articolo": "4150",
              "Macchine compatibili": "4-90 / OL90 / MK8-90 dx",
              "Spessore mm": "3",
              "Peso Kg": "9.300"
            },
            {
              "Articolo": "4155",
              "Macchine compatibili": "OL90 / MK8-90 sx",
              "Spessore mm": "3",
              "Peso Kg": "9.300"
            },
            {
              "Articolo": "4160",
              "Macchine compatibili": "4-120 / OL120 / MK8-120 dx",
              "Spessore mm": "3",
              "Peso Kg": "12.500"
            },
            {
              "Articolo": "4165",
              "Macchine compatibili": "OL120 / MK8-120 sx",
              "Spessore mm": "3",
              "Peso Kg": "12.500"
            },
            {
              "Articolo": "4180",
              "Macchine compatibili": "4-120 / OL120 / MK8-120 dx",
              "Spessore mm": "4",
              "Peso Kg": "16.500"
            },
            {
              "Articolo": "4185",
              "Macchine compatibili": "OL120 / MK8-120 sx",
              "Spessore mm": "4",
              "Peso Kg": "16.500"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/dischi-frattazzo/",
          "name": "Dischi Frattazzo",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/discofrattazzo1.jpg",
          "description_items": [],
          "models": [
            {
              "Art.": "1890",
              "Macchine compatibili": "Moskito Sabbia e cemento",
              "Diametro mm": "600",
              "Peso Kg": "13.00"
            },
            {
              "Art.": "4100",
              "Macchine compatibili": "Moskito sottofondi",
              "Diametro mm": "600",
              "Peso Kg": "5.00"
            },
            {
              "Art.": "4105",
              "Macchine compatibili": "Moskito 4-60 4 linguette",
              "Diametro mm": "600",
              "Peso Kg": "5.00"
            },
            {
              "Art.": "4110",
              "Macchine compatibili": "Moskito 6-60 2 linguette",
              "Diametro mm": "600",
              "Peso Kg": "5.00"
            },
            {
              "Art.": "4115",
              "Macchine compatibili": "Moskito 75 2 linguette",
              "Diametro mm": "750",
              "Peso Kg": "7.80"
            },
            {
              "Art.": "4117",
              "Macchine compatibili": "MK8-75",
              "Diametro mm": "750",
              "Peso Kg": "7.80"
            },
            {
              "Art.": "4120",
              "Macchine compatibili": "4-90 / MK8-90 / MK8-90 HCS sp. 3mm",
              "Diametro mm": "900",
              "Peso Kg": "18.50"
            },
            {
              "Art.": "4121",
              "Macchine compatibili": "4-90 / MK8-90 / MK8-90 HCS sp. 4mm",
              "Diametro mm": "900",
              "Peso Kg": "25.00"
            },
            {
              "Art.": "4133",
              "Macchine compatibili": "5-90 / MK10-90 Hcs",
              "Diametro mm": "90",
              "Peso Kg": "18.70"
            },
            {
              "Art.": "4125",
              "Macchine compatibili": "4-120 / MK8-120 / MK8-120 HCS sp. 3mm",
              "Diametro mm": "1200",
              "Peso Kg": "28.00"
            },
            {
              "Art.": "4126",
              "Macchine compatibili": "4-120 / MK8-120 / MK8-120 HCS sp. 4mm",
              "Diametro mm": "1200",
              "Peso Kg": "35.50"
            },
            {
              "Art.": "4134",
              "Macchine compatibili": "5-120 / MK10-120 HCS",
              "Diametro mm": "1200",
              "Peso Kg": "28.20"
            },
            {
              "Art.": "4130",
              "Macchine compatibili": "MK12-160 spessore 3 mm",
              "Diametro mm": "1600",
              "Peso Kg": "55.00"
            },
            {
              "Art.": "4131",
              "Macchine compatibili": "MK12-160 spessore 4 mm",
              "Diametro mm": "1600",
              "Peso Kg": "58.00"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/staggia-vibrante-a-1-manico/",
          "name": "Staggia vibrante a 1 manico",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/4489-STAGGIA-UN-MANICO-700x716.jpg",
          "description_items": [],
          "models": [
            {
              "Art.": "4600",
              "Lunghezze m": "2.00",
              "Peso Kg": "6.2"
            },
            {
              "Art.": "4602",
              "Lunghezze m": "2.50",
              "Peso Kg": null
            },
            {
              "Art.": "4604",
              "Lunghezze m": "3.00",
              "Peso Kg": "9.3"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/staggia-vibrante-a-2-manici/",
          "name": "Staggia vibrante a 2 manici",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/4972-STAGGIA-2-MAN-PROF-2.5-700x508.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4976",
              "Lunghezza m": "2.00",
              "Peso Kg": "5.00"
            },
            {
              "Articolo": "4977",
              "Lunghezza m": "2.50",
              "Peso Kg": "6.30"
            },
            {
              "Articolo": "4978",
              "Lunghezza m": "3.00",
              "Peso Kg": "8.60"
            },
            {
              "Articolo": "4979",
              "Lunghezza m": "3.50",
              "Peso Kg": "9.30"
            },
            {
              "Articolo": "4982",
              "Lunghezza m": "4.00",
              "Peso Kg": "10.00"
            },
            {
              "Articolo": "4980",
              "Lunghezza m": "4.50",
              "Peso Kg": "10.20"
            },
            {
              "Articolo": "4981",
              "Lunghezza m": "5.00",
              "Peso Kg": "11.90"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/big-blue-float-solo-profilo/",
          "name": "Big blue float – Solo profilo",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT13977-mini-027-700x443.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT13977",
              "DIMENSIONE PROFILO": "914X314 MM"
            },
            {
              "ART": "MT13987",
              "DIMENSIONE PROFILO": "1219X314 MM"
            },
            {
              "ART": "MT13988",
              "DIMENSIONE PROFILO": "1524X314 MM"
            },
            {
              "ART": "MT13989",
              "DIMENSIONE PROFILO": "1829X314 MM"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/4-90-36-inches/",
          "name": "4-9036 inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3100-L-700x440.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 4 5Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-120hcs-46-inches-monster/",
          "name": "MK8-120HCS – Monster46 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/3314_15_23-MONSTER-120-BS37-mini-093-700x474.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-90-hcs-36-inches-monster/",
          "name": "MK8-90 HCS – Monster36 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/3314_15_23-MONSTER-120-BS37-mini-093-700x474.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/mk12-160hcs-64-inches/",
          "name": "MK12-160 HCS 64 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3384-MK-12_160-HCS-mini-028-700x353.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-120hcs-46-inches/",
          "name": "MK8-120 HCS 46 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3316Y_15-GANCIO-700x443.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 10 8Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-120-46-inches/",
          "name": "MK8-12046 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3265G-INT-700x466.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 10 8Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-90-hcs-36-inches/",
          "name": "MK8-90 HCS36 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MK8_90-HCS_mini-700x487.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 10 8Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-90-36-inches/",
          "name": "MK8-9036 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3265G-INT-700x466.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/ol-120hcs-46-inches/",
          "name": "OL-120 HCS46 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/OL-120HCS.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/ol-120-46-inches/",
          "name": "OL-12046 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3295G-INT-700x439.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/ol-90-36-inches/",
          "name": "OL-9036 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3236G-700x482.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/mk8-75-30-inches/",
          "name": "MK8-7530 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3205-MK8_75GX390-700x510.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/giunti/",
          "name": "Giunti",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/giuntibarotti.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo Grezzo": "5150",
              "Articolo Zincato": "5170",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "70 mm"
            },
            {
              "Articolo Grezzo": "5151",
              "Articolo Zincato": "5171",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "80 mm"
            },
            {
              "Articolo Grezzo": "5152",
              "Articolo Zincato": "5172",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "90 mm"
            },
            {
              "Articolo Grezzo": "5153",
              "Articolo Zincato": "5173",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "100 mm"
            },
            {
              "Articolo Grezzo": "5154",
              "Articolo Zincato": "5174",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "110 mm"
            },
            {
              "Articolo Grezzo": "5155",
              "Articolo Zincato": "5175",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "120 mm"
            },
            {
              "Articolo Grezzo": "5156",
              "Articolo Zincato": "5176",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "130 mm"
            },
            {
              "Articolo Grezzo": "5157",
              "Articolo Zincato": "5177",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "140 mm"
            },
            {
              "Articolo Grezzo": "5158",
              "Articolo Zincato": "5178",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "150 mm"
            },
            {
              "Articolo Grezzo": "5159",
              "Articolo Zincato": "5179",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "160 mm"
            },
            {
              "Articolo Grezzo": "5160",
              "Articolo Zincato": "5180",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "170 mm"
            },
            {
              "Articolo Grezzo": "5161",
              "Articolo Zincato": "5181",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "180 mm"
            },
            {
              "Articolo Grezzo": "5162",
              "Articolo Zincato": "5182",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "190 mm"
            },
            {
              "Articolo Grezzo": "5163",
              "Articolo Zincato": "5183",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "200 mm"
            },
            {
              "Articolo Grezzo": "5164",
              "Articolo Zincato": "5184",
              "Descrizione": "Giunto di costruzione in lamiera doppia senza barotti",
              "Altezza": "210 mm"
            },
            {
              "Articolo": "5090",
              "Descrizione": "Singolo barotto completo di guaina e tappo in PVC",
              "Lunghezza": "600 mm",
              "Diametro": "14 mm"
            },
            {
              "Articolo": "5091",
              "Descrizione": "Singolo barotto completo di guaina e tappo in PVC",
              "Lunghezza": "750 mm",
              "Diametro": "16 mm"
            },
            {
              "Articolo": "5092",
              "Descrizione": "Singolo barotto completo di guaina e tappo in PVC",
              "Lunghezza": "750 mm",
              "Diametro": "18 mm"
            },
            {
              "Articolo": "5093",
              "Descrizione": "Singolo barotto completo di guaina e tappo in PVC",
              "Lunghezza": "750 mm",
              "Diametro": "20 mm"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/medio-rendimento-cf2/",
          "name": "Medio rendimento CF2",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/disco-taglio-copia-s-scaled-700x567.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4085",
              "Diametro mm": "300",
              "Spessore mm": "2.8",
              "Foro mm": "30 + boccola di riduzione"
            },
            {
              "Articolo": "4086",
              "Diametro mm": "350",
              "Spessore mm": "2.8",
              "Foro mm": "30 + boccola di riduzione"
            },
            {
              "Articolo": "4055",
              "Diametro mm": "350",
              "Spessore mm": "3.2",
              "Foro mm": "30 + boccola di riduzione"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/alto-rendimento-cf5/",
          "name": "Alto rendimento CF5",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/DISCO-DIAMANTATO.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4087",
              "Diametro": "300",
              "Spessore": "2.8",
              "Foro": "30 + boccola di riduzione"
            },
            {
              "Articolo": "4088",
              "Diametro": "350",
              "Spessore": "2.8",
              "Foro": "30 + boccola di riduzione"
            },
            {
              "Articolo": "4089",
              "Diametro": "350",
              "Spessore": "3.2",
              "Foro": "30 + boccola di riduzione"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/rato/",
          "name": "Rato",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4369-MOTORE-RATO-EHR300-8HP-mini-103-1-700x633.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": null,
              "Descrizione motore": "Rato 6 cv",
              "Potenza Cv": "6",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": null
            },
            {
              "Articolo": null,
              "Descrizione motore": "Rato 8 cv",
              "Potenza Cv": "8",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": null
            },
            {
              "Articolo": null,
              "Descrizione motore": "Rato 12 cv",
              "Potenza Cv": "12",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": null
            },
            {
              "Articolo": null,
              "Descrizione motore": "Rato 31 cv",
              "Potenza Cv": "31",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": null
            },
            {
              "Articolo": null,
              "Descrizione motore": "Rato 999",
              "Potenza Cv": "31",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/hatz/",
          "name": "Hatz",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4465-MOTORE-HATZ-1B40-2-10-HP-mini-116.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": null,
              "Descrizione motore": "Hatz 4,5 cv",
              "Potenza Cv": "4,5",
              "Alimentazione": "Diesel",
              "Avviamento": "Manuale",
              "Ø Albero mm": null
            },
            {
              "Articolo": null,
              "Descrizione motore": "Hatz 10 cv",
              "Potenza Cv": "10",
              "Alimentazione": "Diesel",
              "Avviamento": "Manuale",
              "Ø Albero mm": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/kubota/",
          "name": "Kubota",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4474-MOTORE-KUBOTA-D1305-30-HP-mini-120.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4476",
              "Descrizione motore": "Kubota D 902 E4B Eu X7",
              "Potenza Cv": "25",
              "Alimentazione": "Diesel",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "36.50"
            },
            {
              "Articolo": "4474",
              "Descrizione motore": "Kubota D 1305 E3B Eu X1",
              "Potenza Cv": "30",
              "Alimentazione": "Diesel",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "36.50"
            },
            {
              "Articolo": "4473",
              "Descrizione motore": "Kubota V 2403-M-T-E3B EU X8F",
              "Potenza Cv": "59",
              "Alimentazione": "Diesel",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "36.50"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/lombardini/",
          "name": "Lombardini",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4435-MOTORE-LOMBARDINI-ED7A54C0-mini-128-700x752.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4430",
              "Descrizione motore": "Lombardini 15 LD 350",
              "Potenza Cv": "7.5",
              "Alimentazione": "Diesel",
              "Avviamento": "Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4435",
              "Descrizione motore": "Lombardini 15 LD 440",
              "Potenza Cv": "10",
              "Alimentazione": "Diesel",
              "Avviamento": "Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4477",
              "Descrizione motore": "Lombardini 12 LD 477-2",
              "Potenza Cv": "22",
              "Alimentazione": "Diesel",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "Conico"
            },
            {
              "Articolo": "4445",
              "Descrizione motore": "Lombardini 9 LD 625",
              "Potenza Cv": "28",
              "Alimentazione": "Diesel",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "38.10"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/bes/",
          "name": "B&S",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4414-MOTORE-BS-23-HP-mini-055.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4400",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "14",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4410",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "18",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4405",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "18",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico / Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4407",
              "Descrizione motore": "B&S Vanguard S / SERB",
              "Potenza Cv": "18",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico / Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4413",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "23",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4415",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "31",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "28.57"
            },
            {
              "Articolo": "4416",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "35",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "28.57"
            },
            {
              "Articolo": "4417",
              "Descrizione motore": "B&S Vanguard",
              "Potenza Cv": "35",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "36.50"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/kohler/",
          "name": "Kohler",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4391-MOTORE-KOHLER-25HP-mini-073.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4385",
              "Descrizione motore": "Kohler CH 730",
              "Potenza Cv": "23.5",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "28.57"
            },
            {
              "Articolo": "4390",
              "Descrizione motore": "Kohler CH 742",
              "Potenza Cv": "25",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "28.57"
            },
            {
              "Articolo": "4395",
              "Descrizione motore": "Kohler CH 940",
              "Potenza Cv": "32.5",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "36.50"
            },
            {
              "Articolo": "4396",
              "Descrizione motore": "Kohler CH 1000",
              "Potenza Cv": "37",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "36.50"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/robin/",
          "name": "Robin",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/4350-MOTORE-ROBIN-6HP-mini-057-700x622.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "4350",
              "Descrizione motore": "Robin – Subaru EX 17",
              "Potenza CV": "6",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": "19.05"
            },
            {
              "Articolo": "4360",
              "Descrizione motore": "Robin – Subaru EX 27",
              "Potenza CV": "9",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4367",
              "Descrizione motore": "Robin – Subaru EX 40",
              "Potenza CV": "14",
              "Alimentazione": "Benzina",
              "Avviamento": "Manuale",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4364",
              "Descrizione motore": "Robin – Subaru EX 40",
              "Potenza CV": "14",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "25.40"
            },
            {
              "Articolo": "4366",
              "Descrizione motore": "Robin – Subaru EH 65",
              "Potenza CV": "22",
              "Alimentazione": "Benzina",
              "Avviamento": "Elettrico",
              "Ø Albero mm": "25.40"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/fughe-per-rampe-2/",
          "name": "Fughe per rampe",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT14102-mini-031-700x449.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT14102",
              "DIMENSIONI": "152X76",
              "LAMA": "13",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT14107",
              "DIMENSIONI": "152X111",
              "LAMA": "25",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13836",
              "DIMENSIONI": "152X76",
              "LAMA": "13",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT10953",
              "DIMENSIONI": "152X76",
              "LAMA": "13",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT11105",
              "DIMENSIONI": "152X76",
              "LAMA": "13",
              "MANICO": "PLASTICA"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/nasini-per-gradini-con-bordi-dritti/",
          "name": "Nasini per gradini con bordi dritti",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT14288-mini-010-700x467.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT14288",
              "DIMENSIONI": "203X152",
              "RAGGIO": "13",
              "MANICO E DETTAGLI": "PLASTICA"
            },
            {
              "ART": "MT14292",
              "DIMENSIONI": "254X102",
              "RAGGIO": "13",
              "MANICO E DETTAGLI": "PLASTICA"
            },
            {
              "ART": "MT14294",
              "DIMENSIONI": "254X102",
              "RAGGIO": "19",
              "MANICO E DETTAGLI": "PLASTICA"
            },
            {
              "ART": "MT14223",
              "DIMENSIONI": "152X102",
              "RAGGIO": "10",
              "MANICO E DETTAGLI": "PLASTICA - BLUE STEEL"
            },
            {
              "ART": "MT14225",
              "DIMENSIONI": "152X102",
              "RAGGIO": "13",
              "MANICO E DETTAGLI": "PLASTICA - BLUE STEEL"
            },
            {
              "ART": "MT14280",
              "DIMENSIONI": "152X127",
              "RAGGIO": "13",
              "MANICO E DETTAGLI": "PLASTIC - DENTATO"
            },
            {
              "ART": "MT13896",
              "DIMENSIONI": "152X102",
              "RAGGIO": "10",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13898",
              "DIMENSIONI": "152X102",
              "RAGGIO": "13",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13916",
              "DIMENSIONI": "203X102",
              "RAGGIO": "10",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13918",
              "DIMENSIONI": "203X102",
              "RAGGIO": "13",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13920",
              "DIMENSIONI": "203X102",
              "RAGGIO": "19",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13928",
              "DIMENSIONI": "203X152",
              "RAGGIO": "13",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13972",
              "DIMENSIONI": "152X102",
              "RAGGIO": "13",
              "MANICO": "PLASTICA-BLUE STEEL"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/nasini-per-gradini-con-bordi-ricurvi/",
          "name": "Nasini per gradini con bordi ricurvi",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT14156-mini-009-700x467.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT14146",
              "DIMENSIONI": "152X76",
              "RAGGIO": "10",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT14156",
              "DIMENSIONI": "152X102",
              "RAGGIO": "10",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT14149",
              "DIMENSIONI": "152X102",
              "RAGGIO": "13",
              "MANICO": "PLASTICA"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/cazzuole-bordi-squadrati/",
          "name": "Cazzuole bordi squadrati",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT13229-mini-020-700x330.jpg",
          "description_items": [],
          "models": [
            {
              "ART.": "MT13229",
              "DIMENSIONI": "356X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART.": "MT13226",
              "DIMENSIONI": "356X102",
              "MANICO": "LEGNO"
            },
            {
              "ART.": "MT13246",
              "DIMENSIONI": "406X102",
              "MANICO": "LEGNO"
            },
            {
              "ART.": "MT13266",
              "DIMENSIONI": "457X102",
              "MANICO": "LEGNO"
            },
            {
              "ART.": "MT13446",
              "DIMENSIONI": "305X127",
              "MANICO": "PLASTICA-GOLDEN"
            },
            {
              "ART.": "MT13249",
              "DIMENSIONI": "406X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART.": "MT13269",
              "DIMENSIONI": "457X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13818",
              "DIMENSIONI": "356X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13819",
              "DIMENSIONI": "406X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13837",
              "DIMENSIONI": "457X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13802",
              "DIMENSIONI": "356X102",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13803",
              "DIMENSIONI": "406X102",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13804",
              "DIMENSIONI": "457X102",
              "MANICO": "LEGNO"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/cazzuole-a-1-punta-arrotondata/",
          "name": "Cazzuole a 1 punta arrotondata",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT13510-mini-021-700x454.jpg",
          "description_items": [],
          "models": [
            {
              "ART.": "MT13511",
              "DIMENSIONI": "406X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART.": "MT13510",
              "DIMENSIONI": "406X102",
              "MANICO": "LEGNO"
            },
            {
              "ART.": "MT13512",
              "DIMENSIONI": "457X102",
              "MANICO": "LEGNO"
            },
            {
              "ART.": "MT13514",
              "DIMENSIONI": "508X102",
              "MANICO": "LEGNO"
            },
            {
              "ART.": "MT13513",
              "DIMENSIONI": "457X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART.": "MT13515",
              "DIMENSIONI": "508X102",
              "MANICO": "PLASTICA"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/cazzuole-a-2-punte-arrotondate/",
          "name": "Cazzuole a 2 punte arrotondate",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT13521-mini-005-700x467.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT13521",
              "DIMENSIONE": "356X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13520",
              "DIMENSIONE": "356X102",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13522",
              "DIMENSIONE": "406X102",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13524",
              "DIMENSIONE": "457X102",
              "MANICO": "LEGNO"
            },
            {
              "ART": "MT13536",
              "DIMENSIONE": "508X102",
              "MANICO": "LEGNO-BLUE STEEL"
            },
            {
              "ART": "MT13523",
              "DIMENSIONE": "406X102",
              "MANICO": "PLASTICA"
            },
            {
              "ART": "MT13525",
              "DIMENSIONE": "457X102",
              "MANICO": "PLASTICA"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/bull-float-solo-profilo-arrotondato/",
          "name": "Bull float solo profilo arrotondato",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT14030-mini-030-700x327.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT14028",
              "DIMENSIONI PROFILO": "914X203"
            },
            {
              "ART": "MT14721",
              "DIMENSIONI PROFILO": "1219X203"
            },
            {
              "ART": "MT14030",
              "DIMENSIONI PROFILO": "1524X203"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/bull-float-arrotondato-con-manico-e-snodo/",
          "name": "Bull float arrotondato con manico e snodo",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/MT14030-mini-030-700x327.jpg",
          "description_items": [],
          "models": [
            {
              "ART": "MT14028C",
              "DIMENSIONI MANICO": "1.80MT",
              "DIMENSIONI PROFILO": "914X203"
            },
            {
              "ART": "MT14721C",
              "DIMENSIONI MANICO": "1.80MT",
              "DIMENSIONI PROFILO": "1219X203"
            },
            {
              "ART": "MT14030C",
              "DIMENSIONI MANICO": "1.80MT",
              "DIMENSIONI PROFILO": "1524X203"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/posa-guaina/",
          "name": "Posa guaina",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3650-CARRELLO-SVOLGIGUAINA-700x965.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "3650",
              "Descrizione": "Carrello svolgiguaina",
              "Peso": "44"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/spolverine-br-150/",
          "name": "Spolverine br 150",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3405-SPOLVERINA-BR150-700x786.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/spolverine-br100/",
          "name": "Spolverine br100",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3402-SPOLVERINA-BR100-mini-049-700x750.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "3402",
              "Modello": "Manuale",
              "Capacità di carico kg": null,
              "Peso kg": "70"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/moskito-75-30-inches/",
          "name": "Moskito 4-7530 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3055-G-700x558.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 4 6Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/moskito-60-24-inches-pale/",
          "name": "Moskito 4-6024 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3005-GB-MOSKITO-700x549.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 4 6Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/moskito-sabbia-cemento/",
          "name": "Moskito Sabbia cemento",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3043G-SABBIA-CEMENTO-mini-038-700x668.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/4-80-32-inches/",
          "name": "4-8032 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3093G-4-80-HEAVY-DUTY-mini-044-700x553.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/4-120-46-inches/",
          "name": "4-12046 Inches",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3165-L-700x470.jpg",
          "description_items": [],
          "models": [
            {
              "Motore": "Scegli un'opzione 4 5Svuota",
              "Pale": null
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/mp8-90-polish/",
          "name": "Mp8-90Polish",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/3254-G_10-MP8_90-POLISHING-mini-088-700x477.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/mp8-75-polish/",
          "name": "Mp8-75Polish",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/3254-G_10-MP8_90-POLISHING-mini-088-700x477.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/polish-4-60/",
          "name": "4-60Polish",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/3004-POLISHING-mini-010-700x629.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/accessori-tubo-pompa/",
          "name": "Accessori tubo pompa calcestruzzo",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/accessorivari.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "5290",
              "Descrizione": "SUPPORTO PER TUBO POMPA"
            },
            {
              "Articolo": "5103",
              "Descrizione": "PINZA PER SOLLEVAMENTO TUBO POMPA"
            },
            {
              "Articolo": "5104",
              "Descrizione": "GANCIO PER SOLLEVAMENTO TUBO POMPA"
            },
            {
              "Articolo": "5105",
              "Descrizione": "GANCIO PER SOLLEVAMENTO RETE"
            },
            {
              "Articolo": "5106",
              "Descrizione": "CATENA PER SOLLEVAMENTO TUBO POMPA"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/fughe-per-rampe/",
          "name": "Fughe per rampe",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3960-FUGA.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/vari/",
          "name": "Sottoscarpe",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/5600-PAIO-SOTTOSCARPE-700x364.jpg",
          "description_items": [],
          "models": [
            {
              "Art.": "5600",
              "Description": "Paio di sottoscarpe lisci"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/cazzuole/",
          "name": "Cazzuole",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/5702-CAZZUOLA-MANICO-LEGNO-700x257.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/fughe-per-rampe-dentate/",
          "name": "Fughe per rampe dentate",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3987-FUGA-PER-RAMPE-700x524.jpg",
          "description_items": [],
          "models": [
            {
              "Art.": "3987",
              "Descrizione": "FUGA PER RAMPE A 9 DENTI mm   x   SPESSORE 9 mm",
              "Manico": "Plastica"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/nasini-per-gradini/",
          "name": "Nasini per gradini",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/NASINO_3970.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/spazza-acqua-raschietti-rastrelli/",
          "name": "Spingiacqua",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3950-SPAZZA-ACQUA-C_MANICO-2-mini-105-700x678.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "3940",
              "Descrizione": "Spingiacqua da 0.50 metri"
            },
            {
              "Articolo": "3945",
              "Descrizione": "Spingiacqua da 1.00 metro"
            },
            {
              "Articolo": "3950",
              "Descrizione": "Spingiacqua da 2.00 metri"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/raschietti/",
          "name": "Raschietti",
          "image": "https://www.barikell.it/wp-content/uploads/2025/02/3930-RASCHIETTO-PULIP-S_MANICO-mini-119-700x576.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "3932",
              "Descrizione": "Raschietto pulipannello"
            },
            {
              "Articolo": "3931",
              "Descrizione": "Solo manico in legno per raschietto 1.50 metri Ø 30mm"
            },
            {
              "Articolo": "3930",
              "Descrizione": "Solo raschietto 300×150x1.2 mm"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/rastrelli/",
          "name": "Rastrelli",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/SPAZZA-ACQUA-RASCHIETTI-E-RASTRELLI.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "3935",
              "Descrizione": "RASTRELLO CON MANICO E PALA IN ACCIAIO"
            },
            {
              "Articolo": "3937",
              "Descrizione": "SOLO MANICO IN FERRO 1,5 m ø 26 mm"
            },
            {
              "Articolo": "4038",
              "Descrizione": "SOLO PALA IN FERRO cm 50x10x0,15"
            },
            {
              "Articolo": null,
              "Descrizione": null
            },
            {
              "Articolo": "4046",
              "Descrizione": "RASTRELLO CON MANICO E PALA IN ALLUMINIO"
            },
            {
              "Articolo": "4039",
              "Descrizione": "SOLO MANICO IN ALLUMINIO m 1,5 ø 26 mm"
            },
            {
              "Articolo": "4041",
              "Descrizione": "SOLO PALA IN ALLUMINIO cm 50x12,5x0,3"
            },
            {
              "Articolo": null,
              "Descrizione": null
            },
            {
              "Articolo": "4048",
              "Descrizione": "RASTRELLO CON MANICO IN ALLUMINIO E PALA IN ACCIAIO"
            },
            {
              "Articolo": "4039",
              "Descrizione": "SOLO MANICO IN ALLUMINIO 1,5 m ø 26 mm"
            },
            {
              "Articolo": "4038",
              "Descrizione": "SOLO PALA IN ACCIAIO cm 50x10x0,15"
            },
            {
              "Articolo": null,
              "Descrizione": null
            },
            {
              "Articolo": "4042",
              "Descrizione": "ATTACCO INCLINATO PER RASTRELLO COD. 4046"
            },
            {
              "Articolo": "4049",
              "Descrizione": "ATTACCO DRITTO PER RASTRELLO COD. 4049"
            },
            {
              "Articolo": "1192",
              "Descrizione": "MANOPOLA IN PLASTICA PER TUTTI I TIPI DI RASTRELLI E SPINGIACQUA"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/stagge-ultra-light-in-alluminio/",
          "name": "Stagge ultralight in alluminio",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3900-STAGGIA-MT2-700x239.jpg",
          "description_items": [],
          "models": []
        },
        {
          "url": "https://www.barikell.it/prodotto/ricambi-staggia-ultra-leggera/",
          "name": "Ricambi staggia ultra leggera",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3920-MANICO-PER-STAGGIA-mini-066-700x467.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "3920",
              "Descrizione": "Manico con manopola"
            },
            {
              "Articolo": "3918",
              "Descrizione": "Tappo 80x40 mm"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/picchetti/",
          "name": "Picchetti",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/5295-PICCHETTO-COMPLETO-2-mini-085-700x742.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "5295",
              "Descrizione": "Picchetto completo regolabile sia in altezza che in profondità"
            },
            {
              "Articolo": "5298",
              "Descrizione": "Picchetto completo regolabile solo in altezza"
            },
            {
              "Articolo": "5293",
              "Descrizione": "Staffa per picchetto codice 5295"
            },
            {
              "Articolo": "5294",
              "Descrizione": "Quadrotto 30x30x70 mm per picchetto regolabile codice 5295"
            },
            {
              "Articolo": "5291",
              "Descrizione": "Golfare a vite m. 10 per picchetti codici 5295"
            },
            {
              "Articolo": "5292",
              "Descrizione": "Picchetto a punta per picchetti regolabili codici 5295/5298"
            },
            {
              "Articolo": "5297",
              "Descrizione": "Staffa per picchetto regolabile codice 5298"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/tracciarighe-e-polvere/",
          "name": "Tracciarighe e polvere",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/5300-TRACCIARIGHE-50-MT-700x486.jpg",
          "description_items": [],
          "models": [
            {
              "Articolo": "5300",
              "Descrizione": "Tracciarighe da 50 metri con filo in cotone"
            },
            {
              "Articolo": "5301",
              "Descrizione": "Tracciarighe da 30 metri con filo in cotone"
            },
            {
              "Articolo": "5305",
              "Descrizione": "Flacone di polvere blu per tracciarighe GR 200"
            },
            {
              "Articolo": "5304",
              "Descrizione": "Flacone di polvere blu per tracciarighe GR 300"
            },
            {
              "Articolo": "5393",
              "Descrizione": "Flacone di polvere blu per tracciarighe GR 1000"
            },
            {
              "Articolo": "5394",
              "Descrizione": "Flacone di polvere blu per tracciarighe GR 3000"
            },
            {
              "Articolo": "5302",
              "Descrizione": "Flacone di polvere rossa per tracciarighe GR 200"
            },
            {
              "Articolo": "5303",
              "Descrizione": "Flacone di polvere rossa per tracciarighe GR 300"
            },
            {
              "Articolo": "5395",
              "Descrizione": "Flacone di polvere rossa per tracciarighe GR 1000"
            },
            {
              "Articolo": "5396",
              "Descrizione": "Flacone di polvere rossa per tracciarighe GR 3000"
            }
          ]
        },
        {
          "url": "https://www.barikell.it/prodotto/carrello-trasportatore-universale/",
          "name": "Carrello trasportatore universale",
          "image": "https://www.barikell.it/wp-content/uploads/2019/05/3397-CARRELLO-UNIVERSALE-mini-075.jpg",
          "description_items": [
            "3397 – MK8-75 / OL90 / MK8-90 / MK10-90 e OL120 / MK8-120 / MK10-120",
            "3394 – MK12-160 LIGHT"
          ],
          "models": []
        }
      ]
    },
    {
      brand: "Spectravision",
      products:[
        {
          "url": "https://www.spectraprecision.com/ll300s",
          "image": "https://static.wixstatic.com/media/cd4160_04bf36766c2c497296dc6273d2b4ac62~mv2.png/v1/crop/x_0,y_317,w_2500,h_1896/fill/w_600,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL300S.png",
          "name": " Spectra LL300S ",
          "description_items": [
            "The Spectra LL300S Laser Level features a rugged design with “hard hat” rotor protection that provides superior drop and weather protection. Built to withstand severe drops of up to 3 ft (1 m) directly onto concrete, or up to 5 ft (1.5 m) when pushed over on a tripod means less downtime and cost due to damage caused by accidental drop. With the addition of the grade arrow buttons, grade matching can be performed while the other axis remains self leveled. "
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/cases",
          "image": "https://static.wixstatic.com/media/cd4160_66386ec2a51349bf8ef9e9be83c7ca12~mv2.png/v1/fill/w_310,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Box.png",
          "name": "Cases that protect and bundle.",
          "description_items": [
            "(LL100N, HV101 )"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/autolevel",
          "image": "https://static.wixstatic.com/media/cd4160_0574ff9b5f284761810a6c75e23904e4~mv2.png/v1/crop/x_325,y_371,w_1763,h_1888/fill/w_347,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AL28A.png",
          "name": "Spectra\nAL Auto Levels",
          "description_items": [
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/machine-control",
          "image": "https://static.wixstatic.com/media/cd4160_43efbe0a266644839ce7f1d52d2ee761~mv2.webp/v1/fill/w_221,h_149,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/646f1841522f1b8757216961_NEWTablet-min-p-800.webp",
          "name": "Machine Control",
          "description_items": [
            "Our Products"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hr150u",
          "image": "https://static.wixstatic.com/media/cd4160_701cf328e02b461b88431322f52c553e~mv2.png/v1/crop/x_300,y_206,w_1000,h_2314/fill/w_194,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR150.png",
          "name": "HR150U",
          "description_items": [
            "The HR150U Laser Receiver is an excellent receiver for contractors involved in extensive interior construction and remodeling work. The dual-sided LED display and built-in magnetic mount make it ideal for interior leveling and aligning applications."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl1425c",
          "image": "https://static.wixstatic.com/media/cd4160_518ad8b3f3194bd1af30f1e8ae564401~mv2.png/v1/fill/w_438,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL1425C%20copy%203.png",
          "name": "Spectra GL1425C",
          "description_items": [
            "The automatic self-leveling GL1425C dual grade laser is the most rugged, cost-effective laser that does three jobs - level, grade, and vertical alignment. Even in harsh job site conditions, the GL1425C delivers consistently reliable and accurate performance, enabling you to work faster (up to 900 rpm) and smarter. The GL1425C comes with Bluetooth built-in and has a dedicated Laser Remote App."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hv101",
          "image": "https://static.wixstatic.com/media/cd4160_cc0ad0af788443578ecf6b2d27f00da9~mv2.png/v1/crop/x_0,y_317,w_2500,h_1913/fill/w_497,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV101.png",
          "name": "HV101",
          "description_items": [
            "The automatic, self-leveling Spectra Precision® HV101 Interior Laser is a professional tool with an economical price tag. The HV101 laser is capable of handling a wide variety of horizontal, vertical, and plumb applications. It is designed for both interior applications and exterior applications with a receiver."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/theodolite",
          "image": "https://static.wixstatic.com/media/cd4160_05405ae862744250a04d7fb54f9891d3~mv2.png/v1/crop/x_638,y_104,w_1142,h_2263/fill/w_238,h_469,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DET-2%20Construction%20Theodolite.png",
          "name": "Theodolite DET-2 ",
          "description_items": [
            "Each DET-2 comes equipped with a plumb bob, NiMH rechargeable battery pack and charger, alkaline battery pack, adjustment tools, rain hood, multi-language user guide, and hard-shell, compact, o-ring sealed, carrying case."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hv1305c",
          "image": "https://static.wixstatic.com/media/cd4160_ef0cc25266bc4ad6821e89c2fa5617c4~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV302G.png",
          "name": "HV1305C",
          "description_items": [
            "The automatic self-leveling Spectra Precision® HV1305C red beam laser is the most rugged, cost-effective lasers that provide both horizontal and vertical alignment. Even in harsh job site conditions, the lasers deliver consistently reliable and accurate performance, enabling you to work faster and smarter. "
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl612n",
          "image": "https://static.wixstatic.com/media/bd8f3e_1fd9639eaa1c4aefa9c68817f054e95c~mv2.png/v1/crop/x_480,y_354,w_2484,h_3000/fill/w_414,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL612N%20Grade%20Laser.png",
          "name": "Spectra GL612N",
          "description_items": [
            "The GL612N Grade Laser provides single grade capability of 25% in addition to being fully self-leveled in vertical for building axis alignment or setting 90 degree. Simple, robust and easy to use with a menu-driven interface that is replicated on the radio remote control makes the GL612N the first choice for any contractor requiring versatile grade capability."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lr60w",
          "image": "https://static.wixstatic.com/media/cd4160_ee92ad3dfe0341668eaa12e413183030~mv2.png/v1/crop/x_813,y_175,w_917,h_2063/fill/w_220,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR60%20No%20Shadow.png",
          "name": "LR60 & LR60W",
          "description_items": [
            "The LR60 & LR60W Laser Machine Display Receivers are designed to be used as a stand-alone display receiver on grading and excavating equipment including: dozers, excavators, backhoes, scrapers, and box blades."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/dg613g",
          "image": "https://static.wixstatic.com/media/cd4160_319da9f0b07c4fbb896a3059f5463b2f~mv2.png/v1/fill/w_476,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG613G.png",
          "name": "DG613G",
          "description_items": [
            "Compact and Powerful, the DG613G extra-bright green beam laser combines great performance with productivity. Advanced functions are user-friendly and allow for easy, fast set-up."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/handheld-receivers",
          "image": "https://static.wixstatic.com/media/cd4160_486bd616ab7d45a0a32d340255451c92~mv2.png/v1/crop/x_567,y_204,w_1217,h_2142/fill/w_151,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR320.png",
          "name": "Handheld Laser Receivers",
          "description_items": [
            "Digital Display Receivers"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/qm20",
          "image": "https://static.wixstatic.com/media/cd4160_ea0b3f873ea94c889c61e2fc623ee002~mv2.png/v1/fill/w_600,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pythagoras.png",
          "name": "QM20 Laser Distance Meter",
          "description_items": [
            "Indirect measurements using"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/ll500",
          "image": "https://static.wixstatic.com/media/cd4160_56ec743f28f843ecb80b5f06846e724a~mv2.png/v1/crop/x_404,y_0,w_1729,h_2500/fill/w_362,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL500.png",
          "name": "Spectra LL500",
          "description_items": [
            "The Laser level LL500 is a one-person leveling system designed for longer range measurements across your entire site. Accurate, stable and reliable, the LL500 features a 1,650 ft (500 m) working diameter which increases productivity by reducing the need for multiple setups on a large job site."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/line-point-lasers",
          "image": "https://static.wixstatic.com/media/cd4160_037a12e027b441c692dd9fccbe11a138~mv2.png/v1/fill/w_85,h_43,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Spectra%20Accessories%20Graphic.png",
          "name": "Line & Point Lasers",
          "description_items": [
            "Combination lasers combine the simplicity of a point with the versatility of a line lasers. Green beams are up to four times brighter to the human eye and are ideal for brighter interior conditions."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/pipe-standard",
          "image": "https://static.wixstatic.com/media/cd4160_add433f1019b40faaf9bd51a43ed62fb~mv2.png/v1/crop/x_504,y_600,w_1492,h_1329/fill/w_405,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG613.png",
          "name": "Our Standard Pipe Laser Line",
          "description_items": [
            "Greater"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/parts-accessories",
          "image": "https://static.wixstatic.com/media/cd4160_a37fedcbe15646a9b7eac26327cbb9de~mv2.png/v1/fill/w_156,h_156,al_c,q_85,usm_0.66_1.00_0.01,blur_3,enc_avif,quality_auto/Batteries-Q104667.png",
          "name": "Genuine Spectra Replacement Parts & Accessories.",
          "description_items": [
            "Choose from a wide range of clamps, vials, brackets, and adaptors."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/professional-hv",
          "image": "https://static.wixstatic.com/media/cd4160_68ead9c43f6c47ce86dcf13f289bc737~mv2.png/v1/fill/w_456,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV1305GC%20Hat.png",
          "name": "Professional Grade",
          "description_items": [
            "HV1305C\nStep up to more power"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lt58g",
          "image": "https://static.wixstatic.com/media/cd4160_f67aca96d9f4473cbda6060058d9dbdf~mv2.png/v1/crop/x_325,y_333,w_1883,h_2013/fill/w_371,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IT58G.png",
          "name": "Spectra\nLT56 & LT58G ",
          "description_items": [
            "The unit is compact, lightweight and easy to mount. Installations on high ceiling grids will be a quick, easy task compared to conventional heavy rotating lasers and cumbersome mounts."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/grading-receivers",
          "image": "https://static.wixstatic.com/media/cd4160_5b291b38b91f4883b5d3515938d9b5be~mv2.png/v1/fill/w_600,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/double-vision.png",
          "name": "LR30 & LR30W",
          "description_items": [
            "Durable."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/dg613",
          "image": "https://static.wixstatic.com/media/cd4160_398439b836754b6b93ad6dbf270693e0~mv2.png/v1/crop/x_750,y_83,w_1075,h_2154/fill/w_134,h_267,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RC803.png",
          "name": "Spectra DG613",
          "description_items": [
            "Compact and Powerful, the DG613 red beam laser combines great performance with productivity. Advanced functions are user-friendly and allow for easy, fast set-up. Simple to use, with the new menu driven user interface."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl622n",
          "image": "https://static.wixstatic.com/media/cd4160_31951e814ee045c0a0de95a4c445cd77~mv2.png/v1/crop/x_660,y_450,w_2388,h_2706/fill/w_466,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL622N.png",
          "name": "Spectra GL622N Grade Laser",
          "description_items": [
            "Spectra Precision®  GL622N/GL622IR Grade Lasers. Easy-To-Use, Full Featured Automatic Grade Lasers. The GL622N Dual Grade Laser is rugged, automatic self-levelling laser with grade capability from -25% to + 25% and can be used for a wide variety of grade, excavating and alignment applications by general and speciality contractors."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl412n",
          "image": "https://static.wixstatic.com/media/bd8f3e_23be87d6e42041008b8eb95baba1a42c~mv2.png/v1/crop/x_546,y_600,w_2556,h_2514/fill/w_492,h_484,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL412N%20Grade%20Laser.png",
          "name": "Spectra GL412N",
          "description_items": [
            "The GL412N is a single grade laser that also offers long-range operation in addition to its grade range up to 15%. Operate the laser using longer range remote controls. With a radio remote operating at a range up to 330 feet (100 meters) you have the ability to make grade changes and to make grade changes remotely, which can significantly reduce setup time."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/single-grade",
          "image": "https://static.wixstatic.com/media/bd8f3e_944fca41a0a84ce6bf405b97b562f259~mv2.png/v1/crop/x_660,y_570,w_2238,h_2436/fill/w_392,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL710%20Grade%20Laser.png",
          "name": "The power of Single Grade Laser.",
          "description_items": [
            "Greatest"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lr20",
          "image": "https://static.wixstatic.com/media/cd4160_2feaaa47e34841cf98c2c8422474341a~mv2.png/v1/crop/x_675,y_200,w_1208,h_2088/fill/w_240,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR20.png",
          "name": "LR20",
          "description_items": [
            "Head on a swivel."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hl450",
          "image": "https://static.wixstatic.com/media/cd4160_7e479f73ddfe44979ead69101f54936e~mv2.png/v1/fill/w_311,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HL450.png",
          "name": "The HL450",
          "description_items": [
            "CR700"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/dealer-landing-page",
          "image": "https://static.wixstatic.com/media/cd4160_34e193245b83488ab655a4c17e01dd45~mv2.webp/v1/fill/w_473,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/646f1841522f1b8757216961_NEWTablet-min-p-800.webp",
          "name": "Ready to take your business to a higher dimension?",
          "description_items": [
            "2D Software"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/ul633n",
          "image": "https://static.wixstatic.com/media/bd8f3e_2ae90cd936cb46b4b6c4b05f68c27506~mv2.png/v1/crop/x_396,y_366,w_2676,h_2904/fill/w_412,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UL633N%20Grade%20Laser.png",
          "name": "Spectra UL633N",
          "description_items": [
            "HL760 Specifications"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com",
          "image": "https://static.wixstatic.com/media/cd4160_4de405546d3d40a690bab4837b1e5d68~mv2.png/v1/fill/w_826,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Trifecta.png",
          "name": "Lasers. It's what we do.",
          "description_items": [
            "GL622N"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/rechargeable-batteries-chargers",
          "image": "https://static.wixstatic.com/media/cd4160_66386ec2a51349bf8ef9e9be83c7ca12~mv2.png/v1/fill/w_310,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Box.png",
          "name": "Spectra Rechargeable Batteries & Chargers",
          "description_items": [
            "Dealer Locator"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/stage",
          "image": "https://static.wixstatic.com/media/cd4160_4de405546d3d40a690bab4837b1e5d68~mv2.png/v1/fill/w_826,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Trifecta.png",
          "name": "Lasers. It's what we do.",
          "description_items": [
            "GL622N"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl710",
          "image": "https://static.wixstatic.com/media/bd8f3e_944fca41a0a84ce6bf405b97b562f259~mv2.png/v1/crop/x_613,y_453,w_2286,h_2629/fill/w_410,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL710%20Grade%20Laser.png",
          "name": "Spectra GL710",
          "description_items": [
            "Built for Grade Professionals, the Spectra Precision GL700 Series of grade lasers are the most advanced grade lasers on the market. Delivering industry leading performance and accuracy, you can be sure that if you need to work with grade over long distances and require high accuracy the GL700 series will deliver."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/qm10",
          "image": "https://static.wixstatic.com/media/cd4160_c32cfe9799384f819d0c5c7095d11841~mv2.png/v1/fill/w_269,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/M402.png",
          "name": "QM10",
          "description_items": [
            "Power On / Measure"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/ll1505c",
          "image": "https://static.wixstatic.com/media/cd4160_9387b15e116c4183b8697f27a9f3eafa~mv2.png/v1/fill/w_443,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL1505C-1.png",
          "name": " Spectra LL1505C ",
          "description_items": [
            " The automatic, self-leveling Spectra Precision® LL1505C Laser Level is the most rugged laser level available, tough enough to handle a wide variety of general and concrete construction applications. The rugged laser can withstand drops of up to 1 meter (3 feet) onto concrete and tripod tip overs up to 1.5 meters (5 feet). This strength, combined with full weatherproofing and dustproofing, reduces downtime and lowers repair costs over the life of the product. "
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/ll300n",
          "image": "https://static.wixstatic.com/media/cd4160_868d95b434e341109fbe9a46548943d2~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL300N.png",
          "name": "Spectra LL300N",
          "description_items": [
            "The Spectra LL300N Laser Level features a rugged design with “hard hat” rotor protection that provides superior drop and weather protection. Built to withstand severe drops of up to 3 ft (1 m) directly onto concrete, or up to 5 ft (1.5 m) when pushed over on a tripod means less downtime and cost due to damage caused by accidental drop."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hl760",
          "image": "https://static.wixstatic.com/media/cd4160_51dfb821482e4f798ca6acb94f2e4688~mv2.png/v1/crop/x_608,y_129,w_1242,h_2175/fill/w_254,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HL760U.png",
          "name": "HL760 & HL760U",
          "description_items": [
            "CR700"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hl700",
          "image": "https://static.wixstatic.com/media/cd4160_e20918414d684cecb0ba90e36dfee75e~mv2.png/v1/fill/w_311,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HL700.png",
          "name": "The HL700",
          "description_items": [
            "CR700"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/dg813",
          "image": "https://static.wixstatic.com/media/cd4160_e2a1ce7b5c7143929ebd937cc17d3fb8~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG813.png",
          "name": "Spectra DG813  pipe laying laser",
          "description_items": [
            "When speed, improved reliability, robustness and long lasting performance are required for Pipe Laying the DG813 is the answer. Completely waterproof, with large self-levelled grade range, the DG813 is so fast, so smart and so easy to use that it is an unsurpassed laser tool for pipe laying."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hv1305gc",
          "image": "https://static.wixstatic.com/media/cd4160_f204fdc451434ed99e6ab78b87a1e1ed~mv2.png/v1/fill/w_421,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV1305GC.png",
          "name": "HV1305GC",
          "description_items": [
            "The automatic self-leveling Spectra Precision® HV1305GC green beam laser is the most rugged, cost-effective lasers that provide both horizontal and vertical alignment. Even in harsh jobsite conditions, the lasers deliver consistently reliable and accurate performance, enabling you to work faster and smarter. "
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/laser-family",
          "image": "https://static.wixstatic.com/media/cd4160_f204fdc451434ed99e6ab78b87a1e1ed~mv2.png/v1/fill/w_123,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV1305GC.png",
          "name": "Lasers",
          "description_items": [
            "Grade"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hv302",
          "image": "https://static.wixstatic.com/media/cd4160_5b6eb82bd7854bb081671fe82be399a8~mv2.png/v1/crop/x_0,y_296,w_2500,h_1875/fill/w_563,h_425,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV302.png",
          "name": "HV302",
          "description_items": [
            "The HV302 is capable of handling a wide variety of horizontal, vertical, and plumb applications in both interior and exterior projects. Its high-visibility beam enables simultaneous rotating and 90 degree plumb references and is easy to see even in brightly lit interiors. Various configurations ensure you have the right tool for the job."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/excavating-receivers",
          "image": "https://static.wixstatic.com/media/cd4160_2feaaa47e34841cf98c2c8422474341a~mv2.png/v1/crop/x_675,y_200,w_1208,h_2088/fill/w_240,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR20.png",
          "name": "Excavating Receivers",
          "description_items": [
            "Greatest"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hr1220",
          "image": "https://static.wixstatic.com/media/cd4160_ea07618acad7433f814de19c03d3a44c~mv2.png/v1/crop/x_633,y_0,w_1258,h_2500/fill/w_236,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR1220.png",
          "name": "HR1220",
          "description_items": [
            "The HR1220 Laser Receiver detects both red and green laser beams generated from crossline lasers including the LT52R, LT52G, LT56, and LT58G. The receiver can extend the indoor working range of these crossline lasers as well as increasing versatility by allowing outdoor use."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/unicontrol-3d",
          "image": "https://static.wixstatic.com/media/cd4160_6730bf861a2343019f2534b42da6aca4~mv2.webp/v1/fill/w_719,h_565,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/654a4ddbdbf669e0c6e50872_scenarios_4.webp",
          "name": "Unicontrol3D",
          "description_items": [
            "We will make this simple. The following components are the core of Unicontrol3D that will increase the efficiency of your excavation projects! Unicontrol3D is a flexible, reliable, and simple 3D machine control system. With user-friendly technology, the workday becomes much easier for the operator, and the quality assurance is both faster and more accurate."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/rotating-pro",
          "image": "https://static.wixstatic.com/media/cd4160_33912b42ee474cb89bc327a24393479d~mv2.png/v1/crop/x_0,y_10,w_1439,h_513/fill/w_838,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1282-1981.png",
          "name": "Professional Grade\nRotating Laser Levels",
          "description_items": [
            "Greater"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/distance-meters",
          "image": "https://static.wixstatic.com/media/cd4160_037a12e027b441c692dd9fccbe11a138~mv2.png/v1/fill/w_85,h_43,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Spectra%20Accessories%20Graphic.png",
          "name": " Laser Tape Measure",
          "description_items": [
            "Simply press a button to take a measurement - simple to operate and easy to use."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/copy-of-product-support-1",
          "image": "https://static.wixstatic.com/media/cd4160_5f340d33d39747b3874e44669744c43b~mv2.png/v1/fill/w_322,h_322,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-10.png",
          "name": "Need a service? Need a repair? Looking to buy? Click here!",
          "description_items": [
            "Download product user guides and datasheets here!"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/excavating-grading",
          "image": "https://static.wixstatic.com/media/cd4160_e94f05c32d05461a8a271583067ed74d~mv2.png/v1/crop/x_608,y_158,w_1221,h_2167/fill/w_250,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR50.png",
          "name": "Excavating & Grading",
          "description_items": [
            "Greatest"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/rotary-laser-level",
          "image": "https://static.wixstatic.com/media/cd4160_037a12e027b441c692dd9fccbe11a138~mv2.png/v1/fill/w_852,h_426,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Spectra%20Accessories%20Graphic.png",
          "name": "Rotary Laser Level",
          "description_items": [
            "Professional"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/clamps-brackets-mounts",
          "image": "https://static.wixstatic.com/media/cd4160_66386ec2a51349bf8ef9e9be83c7ca12~mv2.png/v1/fill/w_310,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Box.png",
          "name": "In this business, connections matter.",
          "description_items": [
            " "
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/cr700",
          "image": "https://static.wixstatic.com/media/cd4160_2cf7146efba248ffaea5080d45ddaaf4~mv2.png/v1/crop/x_658,y_208,w_1175,h_2025/fill/w_252,h_429,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CR700.png",
          "name": "The CR700",
          "description_items": [
            "HL760/HL760U"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lp51",
          "image": "https://static.wixstatic.com/media/cd4160_c13e0860489a42c8823488b5ec6472d3~mv2.png/v1/crop/x_635,y_245,w_1735,h_2350/fill/w_377,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LP51G-SHDW.png",
          "name": "LP51 & LP51G\nLaser Pointers",
          "description_items": [
            "The Spectra LP51 and LP51G 5-Beam Laser Pointers are designed to handle a wide range of interior construction applications. These rugged laser pointers offers several benefits to general and interior contractors, electricians, plumbers and a variety of tradesmen."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/dual-grade-lasers",
          "image": "https://static.wixstatic.com/media/cd4160_935d190ff7ba4c6ba9a2c019b230f631~mv2.png/v1/crop/x_0,y_15,w_600,h_583/fill/w_490,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL1425C.png",
          "name": "Spectra, the best laser levelers\nand dual grade lasers.",
          "description_items": [
            "Greater"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/pipe-lasers",
          "image": "https://static.wixstatic.com/media/cd4160_037a12e027b441c692dd9fccbe11a138~mv2.png/v1/fill/w_852,h_426,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Spectra%20Accessories%20Graphic.png",
          "name": "Pipe Lasers",
          "description_items": [
            "If you want to step up to the best in the industry, look no further than our complete line of professional pipe lasers."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hv302g",
          "image": "https://static.wixstatic.com/media/cd4160_ef0cc25266bc4ad6821e89c2fa5617c4~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV302G.png",
          "name": "HV302G",
          "description_items": [
            "The automatic self-leveling Spectra Precision® HV302G Horizontal/Vertical Laser offers exceptional versatility and superior green beam visibility for increased productivity at a great value. The HV302G is capable of handling a wide variety of horizontal, vertical and plumb applications optimized for interior projects. Even in brightly lit interior conditions, the high visibility green beam of the HV302G delivers consistently reliable and accurate performance, enabling you to work faster and smarter."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lt56",
          "image": "https://static.wixstatic.com/media/cd4160_fb2bce3ab0114ee89a97f8a5f28269ef~mv2.png/v1/crop/x_304,y_442,w_1842,h_1696/fill/w_406,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IT56.png",
          "name": "Spectra LT56 \nself-leveling laser.",
          "description_items": [
            "Precision."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/grade-laser",
          "image": "https://static.wixstatic.com/media/cd4160_518ad8b3f3194bd1af30f1e8ae564401~mv2.png/v1/fill/w_206,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL1425C%20copy%203.png",
          "name": "Rotary Grade Lasers",
          "description_items": [
            "Dual grade lasers have the ability to provide two slopes on separate X and Y axis at the same time. This allows you to layout a compound grade.​"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/pipe-premium",
          "image": "https://static.wixstatic.com/media/cd4160_c0f6c3afea6f47019d60fa5019992460~mv2.png/v1/crop/x_438,y_521,w_1658,h_1454/fill/w_443,h_389,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG813.png",
          "name": "Our Premium Pipe Laser Line",
          "description_items": [
            "Greater"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hr320",
          "image": "https://static.wixstatic.com/media/cd4160_486bd616ab7d45a0a32d340255451c92~mv2.png/v1/crop/x_608,y_192,w_1183,h_2138/fill/w_247,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR320.png",
          "name": "HR320",
          "description_items": [
            "The  HR320 Laser Receiver is a durable laser receiver for exterior leveling applications. LCD’s on the front and back display a 5 segment grade arrow that indicates grade position. A loud beeper is designed to be heard on noisy job sites."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/line-lasers",
          "image": "https://static.wixstatic.com/media/cd4160_f67aca96d9f4473cbda6060058d9dbdf~mv2.png/v1/crop/x_325,y_333,w_1883,h_2013/fill/w_371,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IT58G.png",
          "name": "Spectra Line Lasers",
          "description_items": [
            "Greater"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/tripods-rods",
          "image": "https://static.wixstatic.com/media/cd4160_66386ec2a51349bf8ef9e9be83c7ca12~mv2.png/v1/fill/w_310,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Box.png",
          "name": "Tripods & Rods",
          "description_items": [
            "Dealer Locator"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/become-a-dealer",
          "image": "https://static.wixstatic.com/media/cd4160_9cd6d291ea0e4d4cb54671c52a82cba2~mv2.png/v1/fill/w_84,h_34,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Product%20Line.png",
          "name": "Become a Dealer!",
          "description_items": [
            "​"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lr50",
          "image": "https://static.wixstatic.com/media/cd4160_e94f05c32d05461a8a271583067ed74d~mv2.png/v1/crop/x_608,y_158,w_1221,h_2167/fill/w_250,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR50.png",
          "name": "LR50 & LR50W",
          "description_items": [
            "Bing."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/ll-100n",
          "image": "https://static.wixstatic.com/media/cd4160_e5da09ec150f4f419b8b5e27efb5fca5~mv2.png/v1/fill/w_522,h_522,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL100N.png",
          "name": "Spectra LL100N",
          "description_items": [
            "LL300N"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/dg211",
          "image": "https://static.wixstatic.com/media/cd4160_ef7e3c8ece124f558915145d3b45889d~mv2.png/v1/crop/x_0,y_330,w_1800,h_1209/fill/w_600,h_403,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG211.png",
          "name": "DG211 self-leveling\npipe laser",
          "description_items": [
            "​"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/hv-lasers",
          "image": "https://static.wixstatic.com/media/cd4160_fad9ca5004cb4415924f17a372810ff8~mv2.png/v1/fill/w_264,h_265,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV1305C.png",
          "name": "Horizontal & Vertical Lasers",
          "description_items": [
            "These lasers are capable of handling a wide variety of horizontal, vertical, and plumb applications in both interior and exterior projects."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/standard-receivers",
          "image": "https://static.wixstatic.com/media/cd4160_63e524d760af430cad188e40d77f64d1~mv2.png/v1/crop/x_423,y_75,w_770,h_1318/fill/w_252,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR320.png",
          "name": "Standard Receivers",
          "description_items": [
            "Greater"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lt52",
          "image": "https://static.wixstatic.com/media/cd4160_590c0ae51ba049c1a73df9f98129c9cb~mv2.png/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IT52G.png",
          "name": "LT52G & LT52R\ncross line laser.",
          "description_items": [
            "The Spectra LT52G and LT52R are the Tools for All Trades. They eliminate the need for a contractor to purchase two tools by combining a 5 beam laser pointer with a horizontal and vertical cross line laser into one product. The versatile, automatic self-leveling laser tool can be used in a wide variety of construction applications."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/machine-receivers",
          "image": "https://static.wixstatic.com/media/cd4160_037a12e027b441c692dd9fccbe11a138~mv2.png/v1/fill/w_85,h_43,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Spectra%20Accessories%20Graphic.png",
          "name": "Machine Laser Receivers",
          "description_items": [
            "Grading Receivers"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl422n",
          "image": "https://static.wixstatic.com/media/cd4160_19f32414bd9a426c80af498e357e40bb~mv2.png/v1/crop/x_138,y_108,w_956,h_1092/fill/w_478,h_546,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL422N.png",
          "name": "Spectra GL422N",
          "description_items": [
            "The GL422N is a dual grade laser that also offers long-range operation in addition to its grade range up to 15%. Operate the laser using longer range remote controls. With a radio remote operating at a range up to 330 feet (100 meters) you have the ability to make grade changes and to make them remotely, which can significantly reduce setup time."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/lt20",
          "image": "https://static.wixstatic.com/media/cd4160_86337ed533674a069fc956993e81684b~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LT20.png",
          "name": "LT20 & LT20G\nLine Laser",
          "description_items": [
            "The Spectra LT20 Cross Line Laser Tool is an automatic self-leveling multi-purpose tool with 1 vertical plane and 1 horizontal plane. For interior building and remodeling, the LT20 laser tool is used for horizontal and vertical alignment, wall layout, acoustical ceiling installation and finish carpentry."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/digital-display-receivers",
          "image": "https://static.wixstatic.com/media/cd4160_ad2cacbb4244423aae22f1a12afcaf22~mv2.png/v1/crop/x_679,y_142,w_1117,h_2192/fill/w_209,h_411,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HL760.png",
          "name": "Digital Display Receivers",
          "description_items": [
            "Greatest"
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/gl722",
          "image": "https://static.wixstatic.com/media/bd8f3e_57a6925699414d16b06b09b10d4004c6~mv2.png/v1/crop/x_373,y_170,w_735,h_1090/fill/w_388,h_577,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL722%20Grade%20Laser-S.png",
          "name": "Spectra GL722",
          "description_items": [
            "The GL722 dual grade laser is one of the most advanced grade lasers on the market. The long range operation, advanced radio remote, grade matching, Planelok and Automatic Axis Alignment features mean that you can do quick but highly accurate set-ups for any grade application."
          ],
          "models": []
        },
        {
          "url": "https://www.spectraprecision.com/opticals",
          "image": "https://static.wixstatic.com/media/cd4160_037a12e027b441c692dd9fccbe11a138~mv2.png/v1/fill/w_852,h_426,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Spectra%20Accessories%20Graphic.png",
          "name": "Automatic Optical Level Solutions.",
          "description_items": [
            "The DET-2 Construction Theodolite is is a rugged, cost-effective theodolite designed to give accurate angle measurements in general construction applications."
          ],
          "models": []
        }
      ]
    }
  ];


  constructor() { }

  
}
