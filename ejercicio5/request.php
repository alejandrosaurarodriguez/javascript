<?php

if(isset($_POST['nombre'])){
    echo 'Bienvenido '$_POST['nombre'];
}else{
    echo 'Debe introducir un nombre obligatoriamente';
}