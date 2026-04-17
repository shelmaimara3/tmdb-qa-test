Feature: TMDB E2E Testing based on Acceptance Criteria

  Background:
    Given User membuka website TMDB

  @language
  Scenario: User dapat mengubah bahasa tanpa login
    When User mengganti bahasa ke Indonesian
    Then Bahasa berubah ke Indonesian

  @language-login
  Scenario: User dapat mengubah bahasa saat login
    Given User login ke TMDB
    When User mengganti bahasa ke English
    Then Bahasa berubah ke English

  @favorite
  Scenario: User dapat menandai movie sebagai favorite
    Given User login ke TMDB
    When User memilih movie dan menandai sebagai favorite
    Then Movie berhasil ditambahkan ke favorite list

  @view-favorite
  Scenario: User dapat melihat daftar favorite movie
    Given User login ke TMDB
    When User membuka halaman favorite
    Then Daftar favorite movie tampil

  @sorting
  Scenario: User dapat sorting favorite movie
    Given User login ke TMDB
    When User membuka halaman favorite
    And User memilih sorting berdasarkan Popularity
    Then Daftar movie tersorting

  @remove-favorite
  Scenario: User dapat menghapus movie dari favorite
    Given User login ke TMDB
    When User membuka halaman favorite
    And User menghapus movie dari favorite
    Then Movie berhasil dihapus dari favorite