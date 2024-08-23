
import chess from "../images/chess.png";
import amazon from "../images/amazon.png";
import kml from "../images/kml.png";
import baccarat from "../images/baccarat.png";
import server from "../images/client-server.png";
import qrCode from "../images/QR.png";

export const projects = [
    {
        title: "Chess AI",
        link: "https://github.com/rheap404/chess",
        tags: ["Java", "AI", "MiniMax", "System Design"],
        image:
        {
            url: chess,
            alt: "Chess board image"
        }
    },
     {
        title: "Full-stack amazon app recreation",
        link: "https://github.com/rheap404/Full-Stack-Amazon-Website-Recreation",
        tags: ["React", "Node Js", "Typescript", "Javascript"],
        image:
        {
            url: amazon,
            alt: "Full stack amazon web-app"
        }
     },
     {
        title: "GPS Track Data to KML Converter",
        link: "https://github.com/rheap404/GPS-Track-Data-to-KML-convertor",
        tags: ["Java", "KML files"],
        image:
        {
            url: kml,
            alt: "Example GPS Track Data image"
        }
    },
     {
        title: "Client-Server",
        link: "https://github.com/rheap404/Server-Client",
        tags: ["Java", "Networks", "FTP"],
        image:
        {
            url: server,
            alt: "Client-Server Architechture image"
        }
    },
    {
       title: "Baccarat Game",
       link: "https://github.com/rheap404/Baccarat-game",
       tags: ["Java", "Javascript", "OOP", "System Design"],
       image:
       {
           url: baccarat,
           alt: "Baccarat game console image"
       }
   },
   {
      title: "QR Code Generator",
      link: "https://github.com/rheap404/QR-Generator",
      tags: ["Python", "GUI"],
      image:
      {
          url: qrCode,
          alt: "QR code generator"
      }
  }
]