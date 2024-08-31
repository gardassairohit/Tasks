import java.util.HashSet;
import java.util.Set;

public class SetDemo {
    private Set<String> set;

    public SetDemo() {
        set = new HashSet<>();
    }

    public void addElement(String element) {
        set.add(element);
    }

    public void removeElement(String element) {
        set.remove(element);
    }

    public boolean searchElement(String element) {
        return set.contains(element);
    }

    public Set<String> getSet() {
        return set;
    }
}
