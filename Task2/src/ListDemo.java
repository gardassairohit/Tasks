import java.util.ArrayList;
import java.util.List;

public class ListDemo {
    private List<String> list;

    public ListDemo() {
        list = new ArrayList<>();
    }

    public void addElement(String element) {
        list.add(element);
    }

    public void removeElement(String element) {
        list.remove(element);
    }

    public boolean searchElement(String element) {
        return list.contains(element);
    }

    public List<String> getList() {
        return list;
    }
}
