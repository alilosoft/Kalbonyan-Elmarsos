public interface Duck {
    quack();
    fly();
}

public interface Drone {
    public void beep();
    public void spinRotors();
    public void takeOff();
}

class DroneAdapter implements Duck {
    private Drone adaptee;
    
    public DroneAdapter(Drone adaptee) {
        this.adaptee = adaptee;
    }

    // quack like a duck
    quack(){
        this.adaptee.beep();
    }

    // fly like a duck
    fly() {
        this.adaptee.spinRotors();
        this.adaptee.takeOff();
    }
}
