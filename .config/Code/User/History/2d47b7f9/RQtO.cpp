#include <iostream>

int main()
{
   int x { };
   int y { };
   std::cout << "Digite dois valores separados por espaço: ";
   std::cin >> x >> y;

   int z {x + y};

   std::cout << z << '\n';

   return 0;
}