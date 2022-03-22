package com.alex_gorisse.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventPreview;
import com.google.gwt.user.client.dnd.DragListener;
import com.google.gwt.user.client.dnd.DropListener;
import com.google.gwt.user.client.dnd.MouseDragGestureRecognizer;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Demo 1 Drag And Drop Listeners.
 * 
 * This is the first of DragMoveDrop Project.
 *
 */
public class DragMove14 implements EntryPoint, DragListener, DropListener {
  private static int index;
  
  private static native void setIndex(Element elem, int index) /*-{
  elem.style.zIndex = index;
}-*/;
  
  private Image garbDrop, imag;
  private VerticalPanel vertical ;
  private Label generalDrag, generalDrag2, generalDrop, labDrop, verLab;
  private String drag = "", drop = "";
  private boolean stopMove = true;

  public void onModuleLoad() {
    
    // The 3 texts of DnD detect
    generalDrag = new Label("First Drag Listener");
    generalDrag2 = new Label("Second Drag Listener");
    generalDrop = new Label("Drop Listener");
    
    // The Sun
    imag = new Image("soleil_disque.jpg");
    imag.addDragListener(this);    
    
    // The Drag And Drop Label
    labDrop = new Label();
    labDrop.setPixelSize(80, 50);
    labDrop.addStyleName("jeDragOver");
    labDrop.setText("Move or Drop me");
    labDrop.addDropListener(this);
    labDrop.addDragListener(this);    
    
    // The garbage
    garbDrop = new Image("poubelle.jpg");
    garbDrop.addDropListener(this);
    
    // The vertical Panel
    vertical = new VerticalPanel();
    vertical.setStyleName("jeDragOver");
    verLab = new Label("Move this bar");
    verLab.addDragListener(this);
    DOM.setStyleAttribute(verLab.getElement(), "background", "#ffffcc");  
    MouseDragGestureRecognizer mouse =
        MouseDragGestureRecognizer.getGestureMouse(verLab);
    mouse.setDrag(vertical);
    
    // The under Panel of vertical  
    AbsolutePanel principal = new AbsolutePanel();
    principal.setStyleName("jeDragOver");
    principal.setPixelSize(150, 150);
    principal.add(new TextBox(), 10,10);
    principal.add(new Button("Button"), 10,50);
    principal.add(new Label("I'm Text"), 10,100);
    vertical.add(verLab);
    vertical.add(principal);
    
    // We add our element to the root
    RootPanel.get().add(generalDrag,320,20);
    RootPanel.get().add(generalDrag2,320,45);
    RootPanel.get().add(imag, 120, 160);
    RootPanel.get().add(vertical, 450, 150);
    RootPanel.get().add(garbDrop, 450, 500);
    RootPanel.get().add(labDrop, 150, 500);
    RootPanel.get().add(generalDrop, 350,650);

    // Mozilla prevent slow
    DOM.addEventPreview(new EventPreview() {
      public boolean onEventPreview(Event event) {
        if (DOM.eventGetType(event) == Event.ONMOUSEDOWN) {
            DOM.eventPreventDefault(event);
        }
        return true;
      }
    });
  }

  public void onDragDropEnd(Widget sender, Widget target) {
    generalDrag2.setText("You've put the " + drag + " into the " + drop);
  }

  public void onDragEnd(Widget sender, int x, int y) {
    generalDrag.setText("You have finished a drag with the " + drag);
    stopMove = true;
  }

  public void onDragEnter(Widget sender, Widget target) {
    stopMove = false;
    if (target == garbDrop) {
      drop = "garbage";
    } else if (target == labDrop) {
      drop = "D&D Label";
    }
    generalDrag.setText("The " + drag + " has entered the " + drop);
  }

  public void onDragExit(Widget sender, Widget target) {
    stopMove = true;
    generalDrag2.setText("The " + drag + " has exited the " + drop);
  }

  public void onDragMouseMoved(Widget sender, int x, int y) {
    if (stopMove) {
      generalDrag.setText("you're moving the " + drag);
    }
    stopMove = false;
  }

  public void onDragOver(Widget sender, Widget target) {
    generalDrag2.setText("The " + drag + " is over the " + drop);
  }

  public void onDragStart(Widget sender, int x, int y) {
    if (sender == verLab) {
      drag = "Vertical Panel";
    } else if (sender == imag) {
      drag = "sun picture";
    } else if (sender == labDrop) {
      drag = "D&D Label";
    }
    generalDrag.setText("you start a drag with the" + drag);
    MouseDragGestureRecognizer mouse =
        MouseDragGestureRecognizer.getGestureMouse(sender);
    index++;
    this.setIndex(mouse.getDrag().getElement(), index);
  }

  public void onDrop(Widget sender, Widget source) {
    generalDrop.setText("The " + drop + " is dropped by the " + drag);
  }

  public void onDropEnter(Widget sender, Widget source) {
    generalDrop.setText("The " + drop + " has been detected by the " + drag);
  }

  public void onDropExit(Widget sender, Widget source) {
    generalDrop.setText("The " + drop + " has been exited by the " + drag);
  }

  public void onDropOver(Widget sender, Widget source) {
    generalDrop.setText("The " + drop + " is being detected by the " + drag);
  }
}
