var UrlGetArticulos = 'http://localhost:80/G4_19/controller/articulos.php?op=GetArticulos';
var UrlPostArticulo = 'http://localhost:80/G4_19/controller/articulos.php?op=InsertArticulos';

// cuando el documento(pagina este lista) aparecen los datos de articulos
$(document).ready(function(){
    CargarArticulos();
});

function CargarArticulos(){
    $.ajax({
        url: UrlGetArticulos,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var Valores = '';
            for(i =0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>'+ MiItems[i].ID +'</td>'+
                '<td>'+ MiItems[i].DESCRIPCION +'</td>'+
                '<td>'+ MiItems[i].UNIDAD +'</td>'+
                '<td>'+ MiItems[i].COSTO +'</td>'+
                '<td>'+ MiItems[i].PRECIO +'</td>'+
                '<td>'+ MiItems[i].APLICA_ISV +'</td>'+
                '<td>'+ MiItems[i].PORCENTAJE_ISV +'</td>'+
                '<td>'+ MiItems[i].ESTADO +'</td>'+
                '<td>'+ MiItems[i].ID_SOCIO +'</td>'+
            '</tr>';
            $('.articulos').html(Valores);
            }
        }
    });
}

function AgregarArticulo(){
    var datosarticulo = {
        descripcion: $('#descripcion').val(),
        unidad: $('#unidad').val(),
        costo: $('#costo').val(),
        precio: $('#precio').val(),
        aplica_isv: $('#aplica_isv').val(),
        porcentaje_isv: $('#porcentaje_isv').val(),
        id_socio: $('#id_socio').val()
    };
    var datosarticulojson = JSON.stringify(datosarticulo);

    $.ajax({
        url: UrlPostArticulo,
        type: 'POST',
        data: datosarticulojson,
        datatype: 'JSON',
        contentType: 'aplication/json',
        success: function(response){
            console.log(response);
            
        }
    });
    alert("Articulo Agredado");
}