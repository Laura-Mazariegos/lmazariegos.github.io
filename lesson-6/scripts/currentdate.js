<script>
	var dt = new Date();
document.getElementById("currentdate").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());
</script>
