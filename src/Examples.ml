open GameTypes

let create positions =
    let positionedCell position = ( position, Alive ) in
    List.map positionedCell positions


let blinker = create [ ( 1, 1 ); ( 2, 1 ); ( 3, 1 ) ]

let spaceShip = create [ ( 2, 0 ); ( 0, 1 ); ( 2, 1 ); ( 1, 2 ); ( 2, 2 ) ]


let pulsar =
    create
        [ ( 4, 2 )
        ; ( 5, 2 )
        ; ( 6, 2 )
        ; ( 10, 2 )
        ; ( 11, 2 )
        ; ( 12, 2 )
        ; ( 2, 4 )
        ; ( 7, 4 )
        ; ( 9, 4 )
        ; ( 14, 4 )
        ; ( 2, 5 )
        ; ( 7, 5 )
        ; ( 9, 5 )
        ; ( 14, 5 )
        ; ( 2, 6 )
        ; ( 7, 6 )
        ; ( 9, 6 )
        ; ( 14, 6 )
        ; ( 4, 7 )
        ; ( 5, 7 )
        ; ( 6, 7 )
        ; ( 10, 7 )
        ; ( 11, 7 )
        ; ( 12, 7 )
        ; ( 4, 9 )
        ; ( 5, 9 )
        ; ( 6, 9 )
        ; ( 10, 9 )
        ; ( 11, 9 )
        ; ( 12, 9 )
        ; ( 2, 10 )
        ; ( 7, 10 )
        ; ( 9, 10 )
        ; ( 14, 10 )
        ; ( 2, 11 )
        ; ( 7, 11 )
        ; ( 9, 11 )
        ; ( 14, 11 )
        ; ( 2, 12 )
        ; ( 7, 12 )
        ; ( 9, 12 )
        ; ( 14, 12 )
        ; ( 4, 14 )
        ; ( 5, 14 )
        ; ( 6, 14 )
        ; ( 10, 14 )
        ; ( 11, 14 )
        ; ( 12, 14 )
        ]


let glider =
    FromPlainText.toUniverse "
........................O...........
......................O.O...........
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO..............
OO........O...O.OO....O.O...........
..........O.....O.......O...........
...........O...O....................
............OO......................
"


let bakersDozen =
    FromPlainText.toUniverse "
OO.........OO
OOOO.O.....OO
O.O..OOO
...........O
....OO....O.O
....O.....O..O....O
...........OO....OO

...............OOO..O.O
..........OO.....O.OOOO
..........OO.........OO
"


let thunderbird =
    FromPlainText.toUniverse "
OOO

.O
.O
.O
"


let all =
    [ ( "blinker", blinker ); ( "spaceShip", spaceShip ); ( "pulsar", pulsar ); ( "glider", glider ); ( "bakersDozen", bakersDozen ); ( "thunderbird", thunderbird ) ]