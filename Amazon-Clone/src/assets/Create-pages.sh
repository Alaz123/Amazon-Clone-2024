#!/bin/bash

# List of folder names
folders=("Auth" "Cart" "Landing" "Orders" "Payment" "ProductDetail" "Results")

# Associative array of file names for each folder
declare -A files=(
    ["Auth"]="Signup.jsx Signup.module.css"
    ["Cart"]="Cart.jsx Cart.module.css"
    ["Landing"]="Landing.jsx Landing.module.css"
    ["Orders"]="Orders.jsx Landing.module.css"
    ["Payment"]="Payment.jsx Payment.module.css"
    ["ProductDetail"]="ProductDetail.jsx ProductDetail.module.css"
    ["Results"]="Results.jsx Results.module.css"
    
)

# Iterate over the folder names
for folder in "${folders[@]}"
do
    # Create the folder
    mkdir "$folder"

    # Get the file names for the current folder
    file_names=${files[$folder]}

    # Iterate over the file names
    for file_name in $file_names
    do
        # Create the file inside the folder
        touch "$folder/$file_name"
    done
done