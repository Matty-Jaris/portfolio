const leetcodeTasks = [
    {
      title: "Úloha 1: Two Sum",
      description: "Popis úlohy: Najděte dvě čísla v poli, jejichž součet je roven dané hodnotě target. Vráťte indexy těchto čísel. Každý vstup má přesně jedno řešení a není dovoleno použít stejné číslo dvakrát.",
      problemUrl: "https://leetcode.com/problems/two-sum/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/1_two_sum"
    },
    {
      title: "Úloha 2: Palindrome Number",
      description: "Popis úlohy: Úloha spočívá v tom, zjistit, zda je dané celé číslo palindrom. Palindrom je číslo, které čte stejně zleva i zprava. Úkolem je vrátit hodnotu true, pokud je číslo palindrom, nebo false, pokud není.",
      problemUrl: "https://leetcode.com/problems/palindrome-number/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/2_palindrome_number"
    },
    {
      title: "Úloha 3: Roman to Integer",
      description: "Popis úlohy: Úloha spočívá v převodu římského čísla na celé číslo. Římská čísla jsou tvořena kombinací symbolů, přičemž některé symboly, jako například I před V nebo X, znamenají odečítání. Cílem je správně interpretovat tuto kombinaci a převést ji na odpovídající hodnotu celého čísla.",
      problemUrl: "https://leetcode.com/problems/roman-to-integer/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/3_roman_to_integer"
    },
    {
      title: "Úloha 4: Longest Common Prefix",
      description: "Popis úlohy: Úloha spočívá v nalezení nejdelšího společného prefixu mezi řetězci v poli. Pokud takový prefix neexistuje, vrátí se prázdný řetězec.",
      problemUrl: "https://leetcode.com/problems/longest-common-prefix/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/4_longest_common_prefix"
    },
    {
      title: "Úloha 5: Valid Parentheses",
      description: "Popis úlohy: Úloha spočívá v ověření, zda je zadaný řetězec obsahující pouze závorky ('(', ')', '{', '}', '[' a ']') validní. Řetězec je validní, pokud je každá otevřená závorka uzavřena správným typem závorky a závorky jsou uzavřeny ve správném pořadí. Pokud všechny závorky v řetězci odpovídají těmto pravidlům, vrátí se true. Jinak se vrátí false.",
      problemUrl: "https://leetcode.com/problems/valid-parentheses/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/5_valid_parentheses"
    },
    {
      title: "Úloha 6: Merge Two Sorted Lists",
      description: "Popis úlohy: Úkolem je sloučit dva seřazené spojové seznamy do jednoho seřazeného seznamu. Seznamy by měly být propojeny tak, že jejich uzly budou spojeny do jednoho nového seznamu, který bude mít prvky v seřazeném pořadí. Výsledkem je hlava nového sloučeného seznamu.",
      problemUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/6_merge_two_sorted_lists"
    },
    {
      title: "Úloha 7: Remove Duplicates from Sorted Array",
      description: "Popis úlohy: Úkolem je odstranit duplicity z již seřazeného pole čísel tak, aby každé unikátní číslo bylo v poli pouze jednou, a zachovat původní pořadí. Funkce by měla upravit původní pole a vrátit počet unikátních prvků. Ostatní prvky po unikátních hodnotách jsou irelevantní.",
      problemUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/7_remove_duplicates_from_sorted_array"
    },
    {
      title: "Úloha 8: Remove Element",
      description: "Popis úlohy: Úkolem je odstranit všechny výskyty dané hodnoty z pole čísel tak, že zbytek pole bude obsahovat pouze hodnoty, které nejsou rovny dané hodnotě. Po provedení úpravy by funkce měla vrátit počet prvků, které nejsou rovny dané hodnotě. Zbytek pole je irelevantní a není nutné ho upravovat.",
      problemUrl: "https://leetcode.com/problems/remove-element/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/8_remove_element"
    },
    {
      title: "Úloha 9: Find the Index of the First Occurrence in a String",
      description: "Popis úlohy: Úloha spočívá v nalezení prvního výskytu podřetězce (needle) v řetězci (haystack). Pokud je podřetězec přítomen, vrátíme index jeho prvního výskytu. Pokud není podřetězec součástí řetězce, vrátíme -1.",
      problemUrl: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/9_find_the_index_of_the_first_occurrence_in_a_string"
    },
    {
      title: "Úloha 10: Search Insert Position",
      description: "Popis úlohy: Úkolem je najít index, na kterém by měl být vložen cílový prvek v seřazeném poli celých čísel. Pokud je prvek již v poli, vrátíme jeho index. Pokud není, vrátíme index, kde by měl být vložen, aby pole zůstalo seřazeno. Algoritmus musí běžet v čase O(log n), což naznačuje použití binárního vyhledávání.",
      problemUrl: "https://leetcode.com/problems/search-insert-position/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/10_search_insert_position"
    },
    {
      title: "Úloha 11: Length of Last Word",
      description: "Popis úlohy: Úloha spočívá v nalezení délky posledního slova ve zadaném řetězci. Slovo je definováno jako maximální podřetězec skládající se pouze z nepřerušovaných znaků (písmen), oddělených mezerami. Cílem je zjistit délku posledního takového slova v řetězci.",
      problemUrl: "https://leetcode.com/problems/length-of-last-word/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/11_length_of_last_word"
    },
    {
      title: "Úloha 12: Add Binary",
      description: "Popis úlohy: Úloha spočívá v sečítání dvou binárních řetězců. Cílem je vrátit výsledek součtu těchto dvou řetězců také jako binární řetězec.",
      problemUrl: "https://leetcode.com/problems/add-binary/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/12_add_binary"
    },
    {
      title: "Úloha 13: Sqrt(x)",
      description: "Popis úlohy: Úkolem je najít celočíselný druhý kořen čísla, tedy největší celé číslo, jehož druhá mocnina je menší nebo rovna danému číslu. Při výpočtu není povoleno používat vestavěné funkce pro umocnění nebo zjišťování odmocniny. Cílem je implementovat algoritmus, který efektivně zjistí druhou odmocninu daného čísla za použití jiných technik, například binárního vyhledávání.",
      problemUrl: "https://leetcode.com/problems/sqrtx/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/13_sqrt(x)"
    },
    {
      title: "Úloha 14: Climbing Stairs",
      description: "Popis úlohy: Úloha se týká počtu způsobů, jak vystoupat po schodech. Na každém kroku můžeme buď vystoupat o 1 schod, nebo o 2 schody. Cílem je zjistit, kolika způsoby se můžeme dostat na vrchol, když máme k dispozici n schodů.",
      problemUrl: "https://leetcode.com/problems/climbing-stairs/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/14_climbing_stairs"
    },
    {
      title: "Úloha 15: Remove Duplicates from Sorted List",
      description: "Popis úlohy: Úloha spočívá v odstranění všech duplicitních prvků v seřazeném spojeném seznamu, tak aby každý prvek seznamu byl unikátní. Výsledek musí být opět seřazený spojený seznam, což je zaručeno, protože vstupní seznam je již seřazený.\n 1. Začneme procházet seznam od začátku.\n 2. Pokud se současný prvek rovná následujícímu, odstraníme následující prvek, protože jde o duplicitu.\n 3. Pokud nejsou duplicity, pokračujeme na další prvek.\n 4. Proces pokračuje, dokud nedojdeme na konec seznamu.\n 5. Výsledkem je seznam bez duplicitních hodnot.",
      problemUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/15_remove_duplicates_from_sorted_list"
    },
    {
      title: "Úloha 16: Merge Sorted Array",
      description: "Popis úlohy: Úkolem je sloučit dvě seřazená pole do jednoho seřazeného pole. První pole obsahuje m platných hodnot a dostatek místa (n nul) pro všechny prvky z druhého pole, které obsahuje n hodnot. Výsledek sloučení se uloží přímo do prvního pole.",
      problemUrl: "https://leetcode.com/problems/merge-sorted-array/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/16_merge_sorted_array"
    },
    {
      title: "Úloha 17: Binary Tree Inorder Traversal",
      description: "Popis úlohy: Úkolem je provést inorder (střední) průchod binárního stromu. To znamená, že pro každý uzel nejprve navštívíme jeho levý podstrom, potom uzel samotný a nakonec pravý podstrom. Cílem je vrátit hodnoty uzlů ve formě seznamu, který bude obsahovat hodnoty ve správném pořadí, jak je vyžaduje inorder průchod.",
      problemUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/17_binary_tree_inorder_traversal"
    },
    {
      title: "Úloha 18: Same Tree",
      description: "Popis úlohy: Úloha spočívá v porovnání dvou binárních stromů, zda jsou identické. Stromy jsou identické, pokud mají stejnou strukturu a uzly ve stejné úrovni mají stejné hodnoty.",
      problemUrl: "https://leetcode.com/problems/same-tree/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/18_same_tree"
    },
    {
      title: "Úloha 19: Symmetric Tree",
      description: "Popis úlohy: Úkolem je zjistit, zda je binární strom symetrický kolem svého středu, což znamená, že levý a pravý podstrom jsou zrcadlově obrácené. Tento problém lze vyřešit rekurzivně i iterativně, přičemž v obou případech se porovnávají hodnoty a struktura levého a pravého podstromu.",
      problemUrl: "https://leetcode.com/problems/symmetric-tree/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/19_symmetric_tree"
    },
    {
      title: "Úloha 20: Maximum Depth of Binary Tree",
      description: "Popis úlohy: Úloha se zaměřuje na zjištění maximální hloubky binárního stromu. Maximální hloubka stromu je definována jako počet uzlů podél nejdelší cesty od kořene až po nejvzdálenější list. Cílem je napsat funkci, která vrátí tuto hodnotu.",
      problemUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/20_maximum_depth_of_binary_tree"
    },
    {
      title: "Úloha 21:  Convert Sorted Array to Binary Search Tree",
      description: "Popis úlohy: Úloha spočívá v převodu seřazeného pole celých čísel na výškově vyvážený binární vyhledávací strom (BST). Cílem je vytvořit strom, kde každý uzel má hodnotu ze seřazeného pole, přičemž strom bude vyvážený, což znamená, že rozdíl mezi výškami levé a pravé podstromu každého uzlu je maximálně 1.",
      problemUrl: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/21_convert_sorted_array_to_binary_search_tree"
    },
    {
      title: "Úloha 22: Plus One",
      description: "Popis úlohy: Úkolem je přičíst jedničku k číslu reprezentovanému jako pole číslic. Číslice jsou seřazeny od nejvýznamnější po nejméně významnou. Je potřeba správně ošetřit přenosy při sčítání, např. když na konci pole je 9 nebo více devítek za sebou.",
      problemUrl: "https://leetcode.com/problems/plus-one/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/22_plus_one"
    },
    {
      title: "Úloha 23: Balanced Binary Tree",
      description: "Popis úlohy: Urči, zda je binární strom výškově vyvážený - tedy jestli se výšky levého a pravého podstromu každého uzlu liší maximálně o 1.",
      problemUrl: "https://leetcode.com/problems/balanced-binary-tree/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/23_balanced_binary_tree"
    },
    {
      title: "Úloha 24: Minimum Depth of Binary Tree",
      description: "Popis úlohy: Úkolem je najít minimální hloubku binárního stromu, tedy nejkratší vzdálenost (v počtu uzlů) od kořene k nejbližšímu listu.",
      problemUrl: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/24_minimum_depth_of_binary_tree"
    },
    {
      title: "Úloha 25: Path Sum",
      description: "Popis úlohy: Úkolem je zjistit, zda existuje cesta od kořene binárního stromu až k listu (uzlu bez potomků), jejíž součet hodnot uzlů se rovná zadanému cílovému součtu (targetSum).",
      problemUrl: "https://leetcode.com/problems/path-sum/",
      solutionUrl: "https://github.com/Matty-Jaris/LeetCode-solutions/blob/main/25_path_sum"
    },
    
    
  
  ];