$(function () {
  $('#pesquisa').keyup(function () {
    const pesquisa = $(this).val()

    if (pesquisa != '') {
      const dados = {
        palavra: pesquisa,
      }
      $.post('../../control/busca.php', dados, function (retorna) {
        $('.resultadoPesquisa').html(retorna)
      })
    } else {
      const dados = {
        palavra: 'all',
      }
      $.post('../../control/busca.php', dados, function (retorna) {
        $('.resultadoPesquisa').html(retorna)
      })
    }
  })

  $('#searchImage').keyup(function () {
    const searchImage = $(this).val()
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    if (searchImage != '') {
      const dados = {
        input: searchImage,
        id: id,
      }
      $.post('../../control/searchImage.php', dados, function (retorna) {
        $('.imagesSearch').html(retorna)
      })
    } else {
      const dados = {
        input: 'all',
        id: id,
      }
      $.post('../../control/searchImage.php', dados, function (retorna) {
        $('.imagesSearch').html(retorna)
      })
    }
  })
})
