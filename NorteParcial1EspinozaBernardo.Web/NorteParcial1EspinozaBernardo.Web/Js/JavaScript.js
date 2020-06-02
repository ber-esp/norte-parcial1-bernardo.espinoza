

    var constelacion = new Array();

        function Constelacion() {


            this.setNombre = function (value) { this._nombre = value; }
            this.getNombre = function () { return this._nombre; }
        this.setsiglo = function (value) { this._codigo = value; }
            this.getsiglo = function () { return this._codigo; }

            
        }


        $("#btnSave").click(function () {

            var pro = new Producto();
            pro.setCodigo($("#txtSiglo").val());
            pro.setNombre($("#txtNombre").val());

            productos.push(pro);
            $("#txtSiglo").val("");
            $("#txtNombre").val("");
        });

        $("#btnList").click(function () {

            var ctl = $("#resultado");
            ctl.html("");
            $.each(productos, function (i, e) {
        ctl.append("Siglo: " + e.getCodigo() + " - " + "Nombre: " + e.getNombre() + "<br />");
            });
        });

   