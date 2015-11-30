app.controller('competenciasController', function(){
	var vm = this;
	vm.mostrarModal = function()
	{
		$("#modalAdd").openModal();	
	}

	vm.mostrarModal1 = function()
	{
		$("#modalAdd1").openModal();	
	}
	
});