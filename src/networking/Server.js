import React, { Component } from 'react';
import { Text, View } from 'react-native';

const apiGetAllProduct = 'http://192.168.1.25/api/product/list';
const apiCreateProduct = 'http://192.168.1.25/api/product/create';

async function getAllListProduct() {
  try {
    let response = await fetch(apiGetAllProduct);
    let responseJson = await response.json();
    return responseJson.data; //list of product
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
}

async function createProduct(params) {
  try {

    let response = await fetch(apiCreateProduct, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson.message;

  } catch (error) {
    console.log(`Error is a create : ${error}`);
  }
}

export { getAllListProduct };
export { createProduct };
