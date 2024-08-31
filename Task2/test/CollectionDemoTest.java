import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CollectionDemoTest {

    @Test
    public void testListDemo() {
        ListDemo listDemo = new ListDemo();
        listDemo.addElement("Test");
        assertTrue(listDemo.searchElement("Test"));
        listDemo.removeElement("Test");
        assertFalse(listDemo.searchElement("Test"));
    }

    @Test
    public void testSetDemo() {
        SetDemo setDemo = new SetDemo();
        setDemo.addElement("Test");
        assertTrue(setDemo.searchElement("Test"));
        setDemo.removeElement("Test");
        assertFalse(setDemo.searchElement("Test"));
    }

    @Test
    public void testMapDemo() {
        MapDemo mapDemo = new MapDemo();
        mapDemo.addElement("TestKey", 123);
        assertTrue(mapDemo.searchElement("TestKey"));
        mapDemo.removeElement("TestKey");
        assertFalse(mapDemo.searchElement("TestKey"));
    }

    @Test
    public void testDequeDemo() {
        DequeDemo dequeDemo = new DequeDemo();
        dequeDemo.addElementToFront("Test");
        assertTrue(dequeDemo.searchElement("Test"));
        dequeDemo.removeElementFromFront();
        assertFalse(dequeDemo.searchElement("Test"));
    }

    @Test
    public void testStackDemo() {
        StackDemo stackDemo = new StackDemo();
        stackDemo.pushElement("Test");
        assertTrue(stackDemo.searchElement("Test"));
        stackDemo.popElement();
        assertFalse(stackDemo.searchElement("Test"));
    }
}
