# Northwind Traders UI

## Pre-requisites  
* [Angular Cli](https://cli.angular.io/)

## Run
* Restore packages  
`npm i`  
* Run  
`ng serve`

## Build for deployment  
* Using [Kuduscript](https://github.com/projectkudu/kudu/wiki/Custom-Deployment-Script) to generate deployment script  
`npm install kuduscript -g`  
`kuduscript -y --node`


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
