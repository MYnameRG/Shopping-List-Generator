let listApp = angular.module("listApp",[]);
var products = [];
var rank = 1;

listApp.controller("generatorData", ($scope)=>{
    $scope.onAddElement = (brand,product,quantity)=>{
        let item = {
            id: rank++,
            brandName: brand,
            productName: product,
            quantity: quantity
        };
        products.push(item);
        $scope.product_array = products;
    };

    $scope.onClear = ()=>{
        products = []; 
        $scope.product_array = products;
        rank = 1;
    };

    $scope.onPrint = ()=>{
        window.print();
    };

    $scope.onDelete = (id)=>{
        products.splice(id-1,1);
        $scope.product_array = products;
    };
});

