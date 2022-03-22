package com.mycompany.client;


import com.google.gwt.junit.client.GWTTestCase;

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.dnd.DragListener;
import com.google.gwt.user.client.dnd.DragListenerCollection;
import com.google.gwt.user.client.dnd.DropListener;
import com.google.gwt.user.client.dnd.DropListenerCollection;
import com.google.gwt.user.client.dnd.MouseDragGestureRecognizer;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

import java.util.Vector;

public class MyServiceGwtTest extends GWTTestCase { 
  
    public String getModuleName() {
      return "com.mycompany.testDragDrop";
    }
   
    private MouseDragGestureRecognizer mouse;
    private Label lab;
    private DragListener drago, drago2;
    private DropListener dropo, dropo2;
    private DragListenerCollection drag;
    private DropListenerCollection drop;
    
    protected void setUp() {   
      dropo = new DropListener() {
        public void onDrop(Widget sender, Widget source) { }
        public void onDropEnter(Widget sender, Widget source) { }
        public void onDropExit(Widget sender, Widget source) { }
        public void onDropOver(Widget sender, Widget source) { }
      };
      dropo2 = new DropListener() {
        public void onDrop(Widget sender, Widget source) { }
        public void onDropEnter(Widget sender, Widget source) { }
        public void onDropExit(Widget sender, Widget source) { }
        public void onDropOver(Widget sender, Widget source) { }
      };
      drago = new DragListener(){
        public void onDragDropEnd(Widget sender, Widget target) { }
        public void onDragEnd(Widget sender, int x, int y) { }
        public void onDragEnter(Widget sender, Widget target) { }
        public void onDragExit(Widget sender, Widget target) { }
        public void onDragMouseMoved(Widget sender, int x, int y) { }
        public void onDragOver(Widget sender, Widget target) { }
        public void onDragStart(Widget sender, int x, int y) { }       
      };   
      drago2 = new DragListener(){
        public void onDragDropEnd(Widget sender, Widget target) { }
        public void onDragEnd(Widget sender, int x, int y) { }
        public void onDragEnter(Widget sender, Widget target) { }
        public void onDragExit(Widget sender, Widget target) { }
        public void onDragMouseMoved(Widget sender, int x, int y) { }
        public void onDragOver(Widget sender, Widget target) { }
        public void onDragStart(Widget sender, int x, int y) { }       
      };    
      drag = new DragListenerCollection();
      drop = new DropListenerCollection();     
    }
    
    public void instance() {
      lab = new Label();
      RootPanel.get(null).add(lab);
      drag.add(drago, lab);
      mouse = new MouseDragGestureRecognizer(drag, lab);   
    }
    
    public void testMouseGesture() {
      instance();  
      // Tests des paramètres d'initialisation
      MouseDragGestureRecognizer mouse2 = mouse;
      assertFalse (mouse.equals(null));
      assertEquals(mouse, mouse2);
      assertNotNull(mouse);
      assertNull(mouse.getDragHandle());
      assertNull(mouse.getDrag());
      assertNull(mouse.getDrop());
      assertFalse(mouse.getDragOver());
      assertFalse(mouse.getIsClic());
      assertTrue(mouse.getDragMove());
      assertTrue(mouse.getDragPadding());
      assertEquals(mouse.getXoff(), 0);
      assertEquals(mouse.getYoff(), 0);
      assertEquals(mouse.getPaddingLeft(), 0);
      assertEquals(mouse.getPaddingRight(), 0);
      assertEquals(mouse.getPaddingTop(), 0);
      assertEquals(mouse.getPaddingBottom(), 0);
      assertNotNull(mouse.getDragCollection());
      assertNull(mouse.getDropCollection());
      assertNotNull(mouse.getDropMap());
      assertEquals(mouse.getDropMap().size(), 0);
      assertNotNull(mouse.getMouse());
      assertEquals(mouse.getMouse().size(), 1);
       
      //Tests des méthode set, avec des paramètres inverse à l'initialisation
      mouse.setDragHandle(lab);
      mouse.setDrag(lab);
      mouse.setDrop(lab);
      mouse.setDragOver(true);
      mouse.setIsClic(true);
      mouse.setDragMove(false);
      mouse.setDragPadding(false);
      mouse.setPaddingLeft(10);
      mouse.setPaddingRight(10);
      mouse.setPaddingTop(10);
      mouse.setPaddingBottom(10);
      mouse.setXoff(10);
      mouse.setYoff(10);
      mouse.setDragCollection(null);
      mouse.setDropCollection(drop);
      mouse.setDropMap(null);
      mouse.setMouse(null);
      
      assertNotNull(mouse.getDragHandle());
      assertNotNull(mouse.getDrag());
      assertNotNull(mouse.getDrop());
      assertTrue(mouse.getDragOver());
      assertTrue(mouse.getIsClic());
      assertFalse(mouse.getDragMove());
      assertFalse(mouse.getDragPadding());
      assertEquals(mouse.getXoff(), 10);
      assertEquals(mouse.getYoff(), 10);
      assertEquals(mouse.getPaddingLeft(), 10);
      assertEquals(mouse.getPaddingRight(), 10);
      assertEquals(mouse.getPaddingTop(), 10);
      assertEquals(mouse.getPaddingBottom(), 10);
      assertNull(mouse.getDragCollection());
      assertNotNull(mouse.getDropCollection());
      assertNull(mouse.getDropMap());
      assertNull(mouse.getMouse());
      
      //Test du mouseGesture null
      mouse = MouseDragGestureRecognizer.getMouseGesture(null);
      assertNull(mouse);    
    }
    
    public void testMouseDown() {       
     instance();
     
     // Valeur null
     mouse.setXoff(-10);
     mouse.setYoff(-10);
     mouse.setDrag(null);
     mouse.onMouseDown(null, 10, 10);
     assertNull(mouse.getDragHandle());
     assertNull(mouse.getDrag());
     assertEquals(mouse.getXoff(), -10);
     assertEquals(mouse.getYoff(), -10);
     assertEquals(mouse.getDragCollection(), drag); 
     assertTrue(mouse.getDragMove());
     
     // Test Classique
     mouse.onMouseDown(lab, 10, 10);
     assertEquals(mouse.getXoff(), 10);
     assertEquals(mouse.getYoff(), 10);
     assertEquals(mouse.getDrag(), lab);
     assertEquals(mouse.getDragHandle(), lab);
     assertTrue(mouse.getIsClic());
     
     // Test avec un autre label
     Label label = new Label();
     mouse.setDrag(label);
     mouse.onMouseDown(lab, 10, 10);
     assertEquals(mouse.getDragHandle(), lab);
     assertEquals(mouse.getDrag(), label);
     
     // Test avec un autre label en entrée
     mouse.setDrag(null);
     mouse.onMouseDown(label, 10, 10);
     assertEquals(mouse.getDragHandle(), label);
     assertEquals(mouse.getDrag(), label);
     
    }
    
    public void testMouseMove() {
      instance();
      
      //test à null
      mouse.setDragOver(true);
      mouse.onMouseDown(lab, 10, 10);
      mouse.onMouseMove(null, 0, 0);
      assertNotNull(mouse.getDragHandle());
      assertNotNull(mouse.getDrag());
      assertTrue(mouse.getIsClic());
      
      //test classique
      mouse.onMouseMove(lab, 0, 0);
      assertNotNull(mouse.getDragHandle());
      assertNotNull(mouse.getDrag());
      assertTrue(mouse.getIsClic());
      assertTrue(mouse.getDragMove());
      assertTrue(mouse.getDragPadding());
      assertNull(mouse.getDrop());
      
      //test avec un autre label entrée
      mouse.setDrop(lab); 
      mouse.setDropCollection(drop); //erreur si pas présent
      mouse.setDragOver(false); //drop fini en non null si false
      Label labi=new Label();
      mouse.onMouseMove(labi, 0, 0);
      assertFalse(mouse.getDragHandle().equals(labi));
      assertTrue(mouse.getDragHandle().equals(lab));
      assertEquals(mouse.getDrag(),lab);
      assertFalse(mouse.getDrag().equals(labi));
      assertNull(mouse.getDrop());
    }
    
    public void testMouseUp() {
      instance();
      //Test avec null en entrée
      mouse.setDrag(lab);
      mouse.setDragHandle(lab);
      mouse.onMouseUp(null, 10, 10);
      assertNotNull(mouse.getDrag());
      assertNull(mouse.getDragHandle());
      assertNull(mouse.getDrop());
      assertFalse(mouse.getIsClic());
    }
    
    public void tesDragCollection() {
      Label label = new Label();
      
      //Tests d'addition de null
      drag.add(drago, null);
      drag.add(null, label);
      drag.add(null, null);
      
      // Tests des paramètres envoyé en null
      drag.fireDragOnDrop(null, null);
      drag.fireOnDragEnd(null, 0, 0 );
      drag.fireOnDragEnter(null, null);
      drag.fireOnDragExit(null, null);
      drag.fireOnDragMove(null, 0, 0);
      drag.fireOnDragOver(null, null);
      drag.fireOnDragStart(null, 0, 0);
      
      //Vérification de la creation de Gesture
      mouse = MouseDragGestureRecognizer.getMouseGesture(label);
      assertNull(mouse);
      drag.add(drago, label);
      mouse = MouseDragGestureRecognizer.getMouseGesture(label);
      assertNotNull(mouse);
    }
    
    public void tesDropCollection() {
      Label label = new Label();
     
      //Tests d'addition de null
      drop.add(dropo, null);
      drop.add(null, label);
      drop.add(null, null);
      
      //Test des paramètre envoyé en null
      drop.fireDropOnDrop(null, null);
      drop.fireOnDropEnter(null, null);
      drop.fireOnDropExit(null, null);
      drop.fireOnDropOver(null, null);
      
      //Vérification de la liste de drop
      Vector vector = MouseDragGestureRecognizer.getDropMap();
      assertNotNull(vector);
      assertEquals(vector.size(), 0); // Pas d'insertion
      drop.add(dropo, label);
      assertEquals(vector.size(), 1); // insertion
    }
    
    public void testDragListener() {
      Label labo = new Label();
      Label labo2 = new Label();
      Button button = new Button();
      
      // Test de l'insertion null
      labo.addDragListener(null);
      
      // Test des suppressions innexistant
      labo.removeDragListener(null);      
      labo.removeDragListener(drago);
      
      //Vérification que la classe ne s'instancie pas
      mouse = MouseDragGestureRecognizer.getMouseGesture(labo);  
      assertNull(mouse);
      assertNull(mouse.getMouseGesture(labo));     
      
      //Tests d'ajout général
      labo.addDragListener(drago);
      mouse = MouseDragGestureRecognizer.getMouseGesture(labo); 
      assertNotNull(mouse);
      
      //Test des méthodes null
      mouse.onMouseDown(null, -1000000000, -1000000000);
      mouse.onMouseMove(null, -1000000000, -1000000000);
      mouse.onMouseUp(null, -1000000000, -1000000000);
      
      //Test sur l'envoi d'un paramètre autre
      mouse.onMouseDown(labo2, -1000000000, -1000000000);
      mouse.onMouseMove(labo2, -1000000000, -1000000000);
      mouse.onMouseUp(labo2, -1000000000, -1000000000);
      
      //Test sur l'envoi du drag     
      mouse.onMouseDown(labo, -1000000000, -1000000000);
      mouse.onMouseMove(labo, -1000000000, -1000000000);
      mouse.onMouseUp(labo, -1000000000, -1000000000);     
      
      //Test sur l'envoi du drag     
      mouse.onMouseDown(button, -1000000000, -1000000000);
      mouse.onMouseMove(button, -1000000000, -1000000000);
      mouse.onMouseUp(button, -1000000000, -1000000000);
    }
    
    public void testDropListener() {
      Label labo = new Label();
      
      // Test de l'insertion null
      labo.addDropListener(null);
      
      // Test des suppressions innexistant
      labo.removeDropListener(null);      
      labo.removeDropListener(dropo);    
      
      //Tests d'ajout général
      Label labo2 = new Label();
      labo2.addDragListener(drago);
      mouse = MouseDragGestureRecognizer.getMouseGesture(labo2);  
      labo.addDropListener(dropo);
      
      //Test des méthodes null
      mouse.onMouseDown(null, -1000000000, -1000000000);
      mouse.onMouseMove(null, -1000000000, -1000000000);
      mouse.onMouseUp(null, -1000000000, -1000000000);
      
      //Test sur l'envoi d'un paramètre autre
      mouse.onMouseDown(labo2, -1000000000, -1000000000);
      mouse.onMouseMove(labo2, -1000000000, -1000000000);
      mouse.onMouseUp(labo2, -1000000000, -1000000000);
      
      //Test sur l'envoi du drop
      mouse.onMouseDown(labo, -1000000000, -1000000000);
      mouse.onMouseMove(labo, -1000000000, -1000000000);
      mouse.onMouseUp(labo, -1000000000, -1000000000);
    }  
}
