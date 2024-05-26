function insertErrorMessage({ message, selector }) {
  const span = document.querySelector(selector);

  span.textContent = message;
}

$(document).ready(function () {
  $("#studentCPF").mask("000.000.000-00", { placeholder: "___.___.___-__" });
  $("#studentRG").mask("00.000.000-0", { placeholder: "__.___.___-_" });

  $("#responsibleCpf").mask("000.000.000-00", { placeholder: "___.___.___-__" });

  $("#cep").mask("00.000-000", { placeholder: "__.___-___" });

  $("#responsibleRg").mask("00.000.000-0", { placeholder: "__.___.___-_" });

  $("#responsibleCep").mask("00.000-000", { placeholder: "__.___-___" });

  $("#responsiblePhone").mask("(00) 00000-0000", { placeholder: "(__) ____-____" });

  $("form").submit(function (event) {
    event.preventDefault();

    const studentName = $("#studentName").val();
    const dateBirth = $("#dateBirth").val();
    const studentNacionality = $("#nacionality").val();
    const studentGender = $("#selectGender").val();

    const studentStreet = $("#street").val();
    const studentStreetNumber = $("#streetNumber").val();
    const district = $("#district").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const cep = $("#cep").val();

    const isSameAddress = $("#isSameAddress").prop("checked");

    const responsibleName = $("#responsibleName").val();
    const responsibleDateBirth = $("#responsibleDateBirth").val();
    const responsibleCpf = $("#responsibleCpf").val();
    const responsibleRg = $("#responsibleRg").val();
    const responsiblePhone = $("#responsiblePhone").val();
    const responsibleNacionality = $("#responsibleNacionality").val();
    const responsibleGender = $("#responsibleGender").val();
    const responsibleStreet = $("#responsibleStreet").val();
    const responsibleStreetNumber = $("#responsibleStreetNumber").val();
    const responsibleDistrict = $("#responsibleDistrict").val();
    const responsibleCity = $("#responsibleCity").val();
    const responsibleState = $("#responsibleState").val();
    const responsibleCep = $("#responsibleCep").val();

    $("#errorMessageStudentName").text("");
    $("#errorMessageNacionality").text("");
    $("#errorMessageSelectGender").text("");
    $("#errorMessageDateBirth").text("");

    $("#errorMessageStreet").text("");
    $("#errorMessageStreetNumber").text("");
    $("#errorMessageDistrict").text("");
    $("#errorMessageCity").text("");
    $("#errorMessageState").text("");
    $("#errorMessageCep").text("");

    $("#errorMessageResponsibleName").text("");
    $("#errorMessageResponsibleDateBirth").text("");
    $("#errorMessageResponsibleCpf").text("");
    $("#errorMessageResponsibleRg").text("");
    $("#errorMessageResponsiblePhone").text("");
    $("#errorMessageResponsibleNacionality").text("");
    $("#errorMessageResponsibleGender").text("");
    $("#errorMessageResponsibleStreet").text("");
    $("#errorMessageResponsibleStreetNumber").text("");
    $("#errorMessageResponsibleDistrict").text("");
    $("#errorMessageResponsibleCity").text("");
    $("#errorMessageResponsibleState").text("");
    $("#errorMessageResponsibleCep").text("");

    let formIsValid = true;

    if (!studentName) {
      $("#errorMessageStudentName").text("Por favor, insira o nome do aluno.");
      formIsValid = false;
    }

    if (!dateBirth) {
      $("#errorMessageDateBirth").text("Por favor, insira a data de nascimento.");
      formIsValid = false;
    }

    if (!studentNacionality) {
      $("#errorMessageNacionality").text("Por favor, insira a nacionalidade.");
      formIsValid = false;
    }

    if (studentGender === "default") {
      $("#errorMessageSelectGender").text("Por favor, insira o genêro do aluno.");
      formIsValid = false;
    }

    if (!studentStreet) {
      $("#errorMessageStreet").text("Por favor, insira o logradouro.");
      formIsValid = false;
    }

    if (!studentStreetNumber) {
      $("#errorMessageStreetNumber").text("Insira o número.");
      formIsValid = false;
    }

    if (!district) {
      $("#errorMessageDistrict").text("Por favor, insira o bairro.");
      formIsValid = false;
    }

    if (!city) {
      $("#errorMessageCity").text("Por favor, insira a cidade.");
      formIsValid = false;
    }

    if (!state) {
      $("#errorMessageState").text("Por favor, insira o estado.");
      formIsValid = false;
    }

    if (!cep) {
      $("#errorMessageCep").text("Por favor, insira o CEP.");
      formIsValid = false;
    }

    if (!responsibleName) {
      $("#errorMessageResponsibleName").text("Por favor, insira o nome do responsável.");
      formIsValid = false;
    }

    if (!responsibleDateBirth) {
      $("#errorMessageResponsibleDateBirth").text(
        "Por favor, insira a data de nascimento do responsável."
      );
      formIsValid = false;
    }

    if (!responsibleCpf) {
      $("#errorMessageResponsibleCpf").text("Por favor, insira o CPF do responsável.");
      formIsValid = false;
    }

    if (!responsibleRg) {
      $("#errorMessageResponsibleRg").text("Por favor, insira o RG do responsável.");
      formIsValid = false;
    }

    if (!responsiblePhone) {
      $("#errorMessageResponsiblePhone").text("Por favor, insira o telefone do responsável.");
      formIsValid = false;
    }

    if (!responsibleNacionality) {
      $("#errorMessageResponsibleNacionality").text(
        "Por favor, insira a nacionalidade do responsável."
      );
      formIsValid = false;
    }

    if (responsibleGender === "default") {
      $("#errorMessageResponsibleGender").text("Por favor, insira a o gênero do responsável.");
      formIsValid = false;
    }

    if (!isSameAddress) {
      if (!responsibleStreet) {
        $("#errorMessageResponsibleStreet").text(
          "Por favor, insira o endereço do responsável."
        );
        formIsValid = false;
      }

      if (!responsibleStreetNumber) {
        $("#errorMessageResponsibleStreetNumber").text("Insira o número.");
        formIsValid = false;
      }

      if (!responsibleDistrict) {
        $("#errorMessageResponsibleDistrict").text(
          "Por favor, insira o bairro do responsável."
        );
        formIsValid = false;
      }

      if (!responsibleCity) {
        $("#errorMessageResponsibleCity").text("Por favor, insira a cidade do responsável.");
        formIsValid = false;
      }

      if (!responsibleState) {
        $("#errorMessageResponsibleState").text("Por favor, insira o estado do responsável.");
        formIsValid = false;
      }

      if (!responsibleCep) {
        $("#errorMessageResponsibleCep").text("Por favor, insira o CEP do responsável.");
        formIsValid = false;
      }
    }

    if (formIsValid) {
      alert("O formulário foi enviado com sucesso!");
      $("form").reset();
    }
  });
});

$(document).ready(function () {
  $("input#isSameAddress")
    .change(function () {
      var isChecked = $(this).prop("checked");

      if (!isChecked) {
        $(this)
          .closest(".form-group")
          .after(
            '<div class="form-group col-md-3 content-added" >' +
              '<label for="responsibleStreet">Logradouro</label>' +
              '<input type="text" class="form-control" id="responsibleStreet" placeholder="Ex: Rua Itamonhangaba" />' +
              ' <span class="text-danger small" id="errorMessageResponsibleStreet"></span>' +
              "</div>" +
              '<div class="form-group col-md-1 content-added">' +
              '<label for="responsibleStreetNumber">Número</label>' +
              '<input type="number" class="form-control" id="responsibleStreetNumber" placeholder="06" />' +
              '<span class="text-danger small" id="errorMessageResponsibleStreetNumber"></span>' +
              "</div>" +
              '<div class="form-group col-md-2 content-added">' +
              '<label for="complement">Complemento</label>' +
              '<input type="text" class="form-control" id="complement" placeholder="Apt 6" />' +
              "</div>" +
              '<div class="form-group col-md-3 content-added">' +
              '<label for="responsibleDistrict">Bairro</label>' +
              '<input type="text" class="form-control" id="responsibleDistrict" placeholder="Jardim Joana Darc" />' +
              '<span class="text-danger small" id="errorMessageResponsibleDistrict"></span>' +
              "</div>" +
              '<div class="form-group col-md-3 content-added">' +
              '<label for="responsibleCity">Cidade</label>' +
              '<input type="text" class="form-control" id="responsibleCity" placeholder="São Paulo" />' +
              '<span class="text-danger small" id="errorMessageResponsibleCity"></span>' +
              "</div>" +
              '<div class="form-group col-md-3 content-added">' +
              '<label for="responsibleState">Estado</label>' +
              '<input type="text" class="form-control" id="responsibleState" placeholder="São Paulo" />' +
              '<span class="text-danger small" id="errorMessageResponsibleState"></span>' +
              "</div>" +
              '<div class="form-group col-md-3 content-added">' +
              '<label for="responsibleCep">CEP</label>' +
              '<input type="text" class="form-control" id="responsibleCep" placeholder="__.___-___" />' +
              '<span class="text-danger small" id="errorMessageResponsibleCep"></span>' +
              "</div>"
          );
      } else {
        $(".content-added").remove();
      }
    })
    .trigger("change");
});

$(document).ready(function () {
  $("input#digitalTerm")
    .change(function () {
      var isChecked = $(this).prop("checked");

      if (!isChecked) {
        $(this)
          .closest(".form-group")
          .after(
            '<div class="form-group col-md-4 upload">' +
              '<label class="mt-2">Termo de compromisso</label>' +
              '<input type="file" name="img[]" class="file-upload-default" style="display: none;" accept=".pdf,.doc,.docx" />' +
              '<div class="input-group col-xs-12">' +
              '<input type="text" class="form-control file-upload-info" disabled placeholder="Enviar termo assinado" />' +
              '<span class="input-group-append">' +
              '<button class="file-upload-browse btn btn-primary" type="button">Upload</button>' +
              "</span>" +
              "</div>" +
              "</div>"
          );

        $(".file-upload-browse").click(function () {
          $(this).closest(".upload").find(".file-upload-default").click();
        });

        $(".file-upload-default").change(function () {
          var filename = $(this).val().split("\\").pop();
          $(this).closest(".upload").find(".file-upload-info").val(filename);
        });
      } else {
        $(".upload").remove();
      }
    })
    .trigger("change");
});
