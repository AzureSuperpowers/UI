# Northwind Traders UI

## Pre-requisites  
* [Angular Cli](https://cli.angular.io/)

## Run
* Restore packages  
`npm i`  
* Run  
`ng serve`

## Build for deployment  
* Build  
`ng build --prod`  

## Configure EndPoints
> Under Settings
* Create `customer` setting  
    * Set endpoint to `https://[YOUR FUNCTION APP].azurewebsites.net/api/customer`  
    * Add Header  
        * Key: `x-functions-key`  
        * Value: [GET HOST KEY FROM FUNCTION APP SETTINGS]  
* Create `product` setting  
    * Set endpoint to `http://[EXTERNAL IP]:8081`, you can get the external IP address with this command  
    `kubectl get services lbproducts`
