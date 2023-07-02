#include <iostream>

int main() 
{
   std::cout << "Enter a number: ";

   int x{ };
   std::cin >> x;

   std::cout << "Your entered " << x << '\n';
   return 0;
}