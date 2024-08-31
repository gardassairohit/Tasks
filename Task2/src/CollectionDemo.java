public class CollectionDemo {
    public static void main(String[] args) {
        // Initialize the demos
        ListDemo listDemo = new ListDemo();
        SetDemo setDemo = new SetDemo();
        MapDemo mapDemo = new MapDemo();
        DequeDemo dequeDemo = new DequeDemo();
        StackDemo stackDemo = new StackDemo();

        // ListDemo usage
        System.out.println("---- ListDemo ----");
        listDemo.addElement("List Item 1");
        listDemo.addElement("List Item 2");
        System.out.println("List after adding elements: " + listDemo.getList());

        listDemo.removeElement("List Item 1");
        System.out.println("List after removing 'List Item 1': " + listDemo.getList());

        System.out.println("Is 'List Item 2' in the list? " + listDemo.searchElement("List Item 2"));

        // SetDemo usage
        System.out.println("---- SetDemo ----");
        setDemo.addElement("Set Item 1");
        setDemo.addElement("Set Item 2");
        setDemo.addElement("Set Item 2"); // Adding duplicate element
        System.out.println("Set after adding elements (including duplicate): " + setDemo.getSet());

        setDemo.removeElement("Set Item 1");
        System.out.println("Set after removing 'Set Item 1': " + setDemo.getSet());

        System.out.println("Is 'Set Item 2' in the set? " + setDemo.searchElement("Set Item 2"));

        // MapDemo usage
        System.out.println("---- MapDemo ----");
        mapDemo.addElement("Key1", 100);
        mapDemo.addElement("Key2", 200);
        System.out.println("Map after adding elements: " + mapDemo.getMap());

        mapDemo.removeElement("Key1");
        System.out.println("Map after removing 'Key1': " + mapDemo.getMap());

        System.out.println("Is 'Key2' in the map? " + mapDemo.searchElement("Key2"));

        // DequeDemo usage
        System.out.println("---- DequeDemo ----");
        dequeDemo.addElementToFront("Deque Item 1");
        dequeDemo.addElementToEnd("Deque Item 2");
        System.out.println("Deque after adding elements: " + dequeDemo.getDeque());

        dequeDemo.removeElementFromFront();
        System.out.println("Deque after removing from front: " + dequeDemo.getDeque());

        dequeDemo.removeElementFromEnd();
        System.out.println("Deque after removing from end: " + dequeDemo.getDeque());

        dequeDemo.addElementToEnd("Deque Item 3");
        System.out.println("Is 'Deque Item 3' in the deque? " + dequeDemo.searchElement("Deque Item 3"));

        // StackDemo usage
        System.out.println("---- StackDemo ----");
        stackDemo.pushElement("Stack Item 1");
        stackDemo.pushElement("Stack Item 2");
        System.out.println("Stack after pushing elements: " + stackDemo.getStack());

        stackDemo.popElement();
        System.out.println("Stack after popping an element: " + stackDemo.getStack());

        System.out.println("Is 'Stack Item 1' in the stack? " + stackDemo.searchElement("Stack Item 1"));
    }
}
