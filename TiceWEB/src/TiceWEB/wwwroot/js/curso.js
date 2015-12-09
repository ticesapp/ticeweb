
var uri = 'http://localhost:49492/api/Actividad?periodo=2015-03&estado=A';
  
function CursosxActividad() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'http://localhost:49492/api/Actividad?periodo=2015-03&estado=A',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}


function WriteResponse(cursos) {
    var strResult = "<table class=""table table-striped"" ><th>Codigo</th><th>Curso</th><th>Fecha</th><th>Periodo</th><th>Modalidad</th><th>Docente</th><th>Estado</th>";
    $.each(cursos, function (index, cursos) {
        strResult += "<tr><td>" + cursos.Codigo + "</td><td> " + cursos.Curso + "</td><td>" + cursos.Fecha + "</td><td>" + cursos.Periodo + "</td><td>" + cursos.Modalidad + "</td><td>" + cursos.Docente +"</td><td>" + cursos.Estado+ "</td></tr>";
    });
    strResult += "</table>";
    $("#divCurso").html(strResult);
}



function find() {
    var periodo = $('#periodo').val();
    var estado = $('#estado').val();


    $.getJSON(uri + 'periodo=' + periodo + '&estado=' + estado)
      .done(function (data) {
          $.each(data, function (key, item) {
              // Add a list item for the product.
              $('<li>', { text: formatItem(item) }).appendTo($('#products'));
          });
      });
}

