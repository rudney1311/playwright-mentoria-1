Feature: Carrinho de compras da QAZANDO

  Scenario: Visualizar os itens do carrinho e acessar a página do carrinho
    Given que acesso a home da QAZANDO
    When visualizo o carrinho de compras
    Then devo ver os produtos Fit-Flare Dress, Midi Dress e Tulip Dress
    And devo ver o subtotal de $107.00
    When acesso a rota /cart
    Then devo ser direcionado para a rota /cart
    And devo ver o título Shopping Cart