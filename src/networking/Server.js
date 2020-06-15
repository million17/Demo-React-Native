import React, {Component} from 'react';
import {Text, View} from 'react-native';

const apiGetAllProduct = 'http://10.1.34.224/api/product/list';

async function getAllListProduct() {
  try {
    let response = await fetch(apiGetAllProduct);
    let responseJson = await response.json();
    console.log(`Hihi`);
    console.log(responseJson.data);

    return responseJson.data; //list of product
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
}

export {getAllListProduct};
