# NASA-Mining

La NASA a publié il y a peu un grand nombre de données sur son [portail Open Data](https://data.nasa.gov). Classées dans 5 grandes catégories (Aerospace, Applied Science, Earth Science, Management/Operations, Space Science), les données peuvent ainsi être récupérées, affichées et traitées par des programmes tiers. Ces données sont soit des fichiers stockés et mis à disposition (leur contenu est fixe) ; soit des *APIs*, c'est-à-dire des points d'accès aux serveurs de la NASA permettant de recevoir des données mises à jour.

Quelques exemples de fichiers de données fixes :
* Meteorit Landings : https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh
* Apollo Image Atlas : https://data.nasa.gov/external-dataset?datasetId=24k9-24bj
* Active Fire https://data.nasa.gov/external-dataset?datasetId=psbc-zh9i

Exemples de services web / APIs ([ici](https://api.nasa.gov/index.html)) :
* Astronomy Picture of the day : https://api.nasa.gov/api.html#apod
* Toutes les photos envoyées de Mars par Curiosity : https://api.nasa.gov/api.html#MarsPhotos
* Les astéroïdes les plus proches : https://api.nasa.gov/api.html#NeoWS
* Les sons de l'espace : https://api.nasa.gov/api.html#sounds

Afin d'encourager l'utilisation de ces données, la société américaine a initié de nombreux événements créatifs à travers le monde sous le mot d'ordre ["Explore With Us"](https://open.nasa.gov/explore/). En avril dernier 25 "SpaceApps challenges" ont permis de créer 949 applications basées sur les données et les APIs de la NASA.

Nous vous proposons de répondre à ce challenge en concevant une application permettant d'explorer des données de votre choix. L'objectif de votre application est offrir un regard nouveau, pertinent, et étonnant sur ces données en jouant sur un certain nombre de principes d'exploration : filtres, tris, croisements, jeux d'échelle, variables, etc.

Après une rapide phase de conception (sketching - wireframing), vos applications seront prototypées en HTML/CSS + JS, et publiées dans ce repo GitHub. Vous utiliserez ProcessingJS pour la partie visualisation (ou une autre librairie plus adaptée).
