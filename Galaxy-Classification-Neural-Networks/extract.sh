#!/bin/bash


if [ -f ./GalaxyZoo1_DRcsv.csv.zip.tar.bz2 ]
then
    
    echo "Extracting Content.."
    tar -xjvf GalaxyZoo1_DRcsv.csv.zip.tar.bz2
    unzip GalaxyZoo1_DRcsv.csv.zip

    echo ""
    echo "done."

else
    echo "Theres no such file.Please Re-clone for the tar file."
fi