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
          name: "S-485 Laser Screed",
          image: "images/hersteller/somero/somero1.jpg",
          description: "Kompakter Laser Screed für kleinere bis mittlere Flächen mit hoher Ebenheit.",
          models: [
            {
              code: "S485-GX390",
              engine: "Honda GX390",
              rotor_diameter_cm: 90,
              blade_count: 4,
              output_speed_rpm: 150,
              power_hp: 13,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 120
            },
            {
              code: "S485-GX420",
              engine: "Honda GX420",
              rotor_diameter_cm: 95,
              blade_count: 5,
              output_speed_rpm: 160,
              power_hp: 14,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 130
            },
            {
              code: "S485-GX530",
              engine: "Honda GX530",
              rotor_diameter_cm: 100,
              blade_count: 5,
              output_speed_rpm: 170,
              power_hp: 16,
              start: "Electric",
              fuel_type: "Gasoline",
              weight_kg: 140
            },
            {
              code: "S485-GX610",
              engine: "Honda GX610",
              rotor_diameter_cm: 105,
              blade_count: 6,
              output_speed_rpm: 180,
              power_hp: 18,
              start: "Electric",
              fuel_type: "Gasoline",
              weight_kg: 150
            },
            {
              code: "S485-GX660",
              engine: "Honda GX660",
              rotor_diameter_cm: 110,
              blade_count: 6,
              output_speed_rpm: 190,
              power_hp: 20,
              start: "Electric",
              fuel_type: "Gasoline",
              weight_kg: 160
            }
          ]
        },
        {
          name: "S-22EZ Laser Screed",
          image: "images/hersteller/somero/somero2.jpg",
          description: "Hochleistungs-Screed für große Betonflächen mit effizienter Steuerung und präziser Nivellierung.",
          models: [
            {
              code: "S22EZ-KD1000",
              engine: "Kubota D1105",
              rotor_diameter_cm: 120,
              blade_count: 5,
              output_speed_rpm: 130,
              power_hp: 24.8,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1450
            },
            {
              code: "S22EZ-KD2000",
              engine: "Kubota D1105",
              rotor_diameter_cm: 125,
              blade_count: 6,
              output_speed_rpm: 135,
              power_hp: 26.5,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1500
            },
            {
              code: "S22EZ-KD3000",
              engine: "Kubota D1503",
              rotor_diameter_cm: 130,
              blade_count: 7,
              output_speed_rpm: 140,
              power_hp: 30.0,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1600
            },
            {
              code: "S22EZ-KD4000",
              engine: "Kubota D1503",
              rotor_diameter_cm: 135,
              blade_count: 8,
              output_speed_rpm: 145,
              power_hp: 32.0,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1700
            },
            {
              code: "S22EZ-KD5000",
              engine: "Kubota V1505",
              rotor_diameter_cm: 140,
              blade_count: 9,
              output_speed_rpm: 150,
              power_hp: 35.0,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1800
            },
            {
              code: "S22EZ-KD6000",
              engine: "Kubota V1505",
              rotor_diameter_cm: 145,
              blade_count: 10,
              output_speed_rpm: 155,
              power_hp: 38.5,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1900
            }
          ]
          
        },
        {
          name: "CopperHead XD 3.0",
          image: "images/hersteller/somero/somero3.jpg",
          description: "Leichtes und wendiges Modell für schmale Bereiche und kleine Baustellen.",
          models: [
            {
              code: "CHXD3-H390",
              engine: "Honda GX390",
              rotor_diameter_cm: 80,
              blade_count: 4,
              output_speed_rpm: 140,
              power_hp: 13,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 100
            }
          ]
        },
        {
          name: "S-158C Laser Screed",
          image: "images/hersteller/somero/somero4.jpg",
          description: "Leistungsstarke Maschine für große Betonflächen – ideal für industrielle Projekte.",
          models: [
            {
              code: "S158C-D902",
              engine: "Kubota D902",
              rotor_diameter_cm: 105,
              blade_count: 5,
              output_speed_rpm: 135,
              power_hp: 22,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1300
            }
          ]
        },
        {
          name: "Mini Screed C",
          image: "images/hersteller/somero/somero5.jpg",
          description: "Kompakte Lösung für präzises Arbeiten in engen Räumen mit manueller Bedienung.",
          models: [
            {
              code: "MSC-G390",
              engine: "Honda GX390",
              rotor_diameter_cm: 85,
              blade_count: 4,
              output_speed_rpm: 150,
              power_hp: 13,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 110
            }
          ]
        },
        {
          name: "S-10A Laser Screed",
          image: "images/hersteller/somero/somero2.jpg",
          description: "Kraftvolles Modell für mittlere bis große Flächen – elektrisch gestartet für mehr Komfort.",
          models: [
            {
              code: "S10A-K1005",
              engine: "Kubota D1105",
              rotor_diameter_cm: 100,
              blade_count: 5,
              output_speed_rpm: 145,
              power_hp: 25,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 1400
            }
          ]
        }
      ]
    },
    {
      brand: "Barikell",
      products: [
        {
          name: "BT900 Ride-On Trowel",
          image: "images/hersteller/barikell/barikell1.jpg",
          description: "Fahrbare Glättmaschine für professionelles Finish großer Flächen – kraftvoll und komfortabel.",
          models: [
            {
              code: "BT900-H",
              engine: "Honda GX690",
              rotor_diameter_cm: 100,
              blade_count: 4,
              output_speed_rpm: 140,
              power_hp: 22,
              start: "Electric",
              fuel_type: "Gasoline",
              weight_kg: 330
            }
          ]
        },
        {
          name: "BT1200 Twin Rotor",
          image: "images/hersteller/barikell/barikell2.jpg",
          description: "Zwillingsrotor-Glätter für maximale Flächenleistung mit kraftvollem Dieselantrieb.",
          models: [
            {
              code: "BT1200-KD",
              engine: "Kohler Diesel",
              rotor_diameter_cm: 120,
              blade_count: 5,
              output_speed_rpm: 135,
              power_hp: 25,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 370
            }
          ]
        },
        {
          name: "BT75 Walk-Behind",
          image: "images/hersteller/barikell/barikell3.jpg",
          description: "Handgeführte Maschine für mittlere Flächen – zuverlässig und einfach zu bedienen.",
          models: [
            {
              code: "BT75-GX270",
              engine: "Honda GX270",
              rotor_diameter_cm: 75,
              blade_count: 4,
              output_speed_rpm: 140,
              power_hp: 9,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 95
            }
          ]
        },
        {
          name: "BT60 Walk-Behind",
          image: "images/hersteller/barikell/barikell4.jpg",
          description: "Kleine, robuste Glättmaschine für enge und schwer zugängliche Bereiche.",
          models: [
            {
              code: "BT60-GX200",
              engine: "Honda GX200",
              rotor_diameter_cm: 60,
              blade_count: 4,
              output_speed_rpm: 135,
              power_hp: 6.5,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 80
            }
          ]
        },
        {
          name: "BT100 Dual Trowel",
          image: "images/hersteller/barikell/barikell1.jpg",
          description: "Doppelteller-Glättmaschine für professionelle Ergebnisse bei mittleren bis großen Flächen.",
          models: [
            {
              code: "BT100-KH",
              engine: "Kohler CH730",
              rotor_diameter_cm: 100,
              blade_count: 5,
              output_speed_rpm: 150,
              power_hp: 23,
              start: "Electric",
              fuel_type: "Gasoline",
              weight_kg: 360
            }
          ]
        },
        {
          name: "BT Compact Ride-On",
          image: "images/hersteller/barikell/barikell2.jpg",
          description: "Kompakte Aufsitzmaschine für exaktes Arbeiten auf engem Raum – ideal für Innenbereiche.",
          models: [
            {
              code: "BTC-HG390",
              engine: "Honda GX390",
              rotor_diameter_cm: 90,
              blade_count: 4,
              output_speed_rpm: 140,
              power_hp: 13,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 280
            }
          ]
        }
      ]
    },
    {
      brand: "Husqvarna",
      products: [
        {
          name: "CRT36 Ride-On Trowel",
          image: "images/hersteller/husqvarna/husqvarna1.webp",
          description: "Komfortable Aufsitz-Glättmaschine mit starkem Motor für großflächige Arbeiten.",
          models: [
            {
              code: "CRT36-GX690",
              engine: "Honda GX690",
              rotor_diameter_cm: 92,
              blade_count: 5,
              output_speed_rpm: 160,
              power_hp: 22,
              start: "Electric",
              fuel_type: "Gasoline",
              weight_kg: 315
            }
          ]
        },
        {
          name: "CRT48 Power Trowel",
          image: "images/hersteller/husqvarna/husqvarna2.webp",
          description: "Leistungsstarke Lösung für hohe Produktivität auf Großbaustellen mit Dieselantrieb.",
          models: [
            {
              code: "CRT48-KD750",
              engine: "Kohler Diesel 7500",
              rotor_diameter_cm: 120,
              blade_count: 6,
              output_speed_rpm: 140,
              power_hp: 25,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 400
            }
          ]
        },
        {
          name: "CT48 Walk-Behind",
          image: "images/hersteller/husqvarna/husqvarna3.webp",
          description: "Robuste Maschine mit großem Rotordurchmesser für effizientes Arbeiten.",
          models: [
            {
              code: "CT48-GX390",
              engine: "Honda GX390",
              rotor_diameter_cm: 122,
              blade_count: 4,
              output_speed_rpm: 135,
              power_hp: 13,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 115
            }
          ]
        },
        {
          name: "CT36 Walk-Behind",
          image: "images/hersteller/husqvarna/husqvarna2.webp",
          description: "Kompakte handgeführte Glättmaschine für kleinere bis mittlere Flächen.",
          models: [
            {
              code: "CT36-GX270",
              engine: "Honda GX270",
              rotor_diameter_cm: 90,
              blade_count: 4,
              output_speed_rpm: 140,
              power_hp: 9,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 95
            }
          ]
        },
        {
          name: "BG375 Trowel",
          image: "images/hersteller/husqvarna/husqvarna1.webp",
          description: "Einsteigerfreundlich, leicht und wendig – ideal für kleine Flächen und Reparaturarbeiten.",
          models: [
            {
              code: "BG375-GX200",
              engine: "Honda GX200",
              rotor_diameter_cm: 60,
              blade_count: 4,
              output_speed_rpm: 135,
              power_hp: 6.5,
              start: "Manual",
              fuel_type: "Gasoline",
              weight_kg: 85
            }
          ]
        },
        {
          name: "CRT60 Hydraulic Trowel",
          image: "images/hersteller/husqvarna/husqvarna3.webp",
          description: "Hydraulisch betriebene High-End-Glättmaschine für industrielle Anforderungen.",
          models: [
            {
              code: "CRT60-HYD-KD1000",
              engine: "Kubota Diesel",
              rotor_diameter_cm: 125,
              blade_count: 6,
              output_speed_rpm: 150,
              power_hp: 30,
              start: "Electric",
              fuel_type: "Diesel",
              weight_kg: 450
            }
          ]
        }
      ]
    }
  ];


  constructor() { }

  
}
