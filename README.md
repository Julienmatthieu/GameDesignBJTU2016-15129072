# GameDesignBJTU2016-15129072

Game Dev.  Julien Bogiraud - 15129072 


Snake:

One player. 

Wall, Cube, Snake, Player, Food, Speed, Goal, Point. 

Player: 
One player.
You control a snake. 
You can make the snake turn right and left. 

Goal:
You should feed your snake with fruit to get points.
Finish the game with the highest score.

Game Rules:
Snake: 
The snake’s body is made of blocks.
The snake’s body starts with 3 blocks.
The snake speed is one case per second. The snake is going strait by default.   	
To move every block of the body is following the path draw by the head. 
When the snake eat a fruit one block is adding to the end of his body. (when the last block is passing on the fruit case).  
The snake dies when he touch a wall or his own body.
The game end when the snake die. 

Fruit:
Fruit’s position is generated at random.
There is a maximum of 2 fruits in the same time on the map.
When the snake eats a fruit a new one is generated. 
A fruit is eating when the snake eat is on the same case then the fruit.
Each fruit give 100 points to the player.

Game World:
The map is a rectangle limited by walls. 
The map is made of cases where fruit can pop and the snake can move. 





