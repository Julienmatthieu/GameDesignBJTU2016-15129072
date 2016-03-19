# GameDesignBJTU2016-15129072

Game Dev.  Julien Bogiraud - 15129072 


Snake:

One player. 

Elements : 
Wall, Cube, Snake, Player, Food, Speed, Goal, Point. 

Player: 
One player.
You control a snake. 
You can make the snake turn right and left. 

Goal:
You should feed your snake with fruit to get points.
Finish the game with the highest score.

Game World:
The map is a rectangle limited by walls.
The map is made of cases where fruit can pop and the snake can move. 

Game Rules:
Snake: 
The snake is made of 2 parts : The head - The body.
The dnake's head is made of a block. 
The snake’s body is made of blocks (a little bit smaller than the head block to reconise it).
The snake’s body starts with 3 blocks.

The snake speed is one case per second. The snake is going strait (direction is taking from the head) by default. 
The head can turn right and left or go strait. 
To move every block of the body is taking the position of the block before it. (starting from the head). 
When the snake eat a fruit one block is adding to the end of his body on the next move. (To the player it appear like the last block of the body is not moving when the sanke eat and the next turn.)  
The snake dies when he's head touch a wall or his own body.
The game end when the snake die. 

Fruit:
Fruit’s position is generated at random on the map. (Could spawn only on free case (free case = No wall, No Fruit, No Snake body, No Snake Head))
When the snake eats a fruit a new one is generated. 
There is a maximum of 2 fruits in the same time on the map.
A fruit is eating when the snake eat is on the same case then the fruit.
Each fruit give 10 points to the player.




