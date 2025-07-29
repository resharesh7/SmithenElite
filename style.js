<script>
  const serviceSelect = document.getElementById("serviceSelect");
  const otherServiceField = document.getElementById("otherServiceField");

  serviceSelect.addEventListener("change", function () {
    otherServiceField.style.display = serviceSelect.value === "Other" ? "block" : "none";
  });
</script>
