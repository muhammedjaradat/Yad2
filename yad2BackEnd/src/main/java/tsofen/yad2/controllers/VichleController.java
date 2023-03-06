package tsofen.yad2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tsofen.yad2.beans.Viechle;
import tsofen.yad2.bl.ViechleBL;

import java.util.List;

@RestController
@RequestMapping("viechles")
@CrossOrigin
public class VichleController {

  @Autowired
  private ViechleBL viechleBL;

  @PostMapping("add")
  public ResponseEntity addViechles(@RequestBody Viechle viechle){

      Viechle newViechle=this.viechleBL.addViechle(viechle);
      return ResponseEntity.ok(newViechle);
}
@GetMapping("all")
  public List<Viechle> getAllViechles(){return this.viechleBL.getAllViechels();}

  @GetMapping("cost/{cost1}/{cost2}")
  public List<Viechle> findBycostBetween (@PathVariable Integer cost1,@PathVariable Integer cost2){
    return this.viechleBL.findBycostBetween(cost1,cost2);
  }
  @GetMapping("year/{year1}/{year2}")
  public List<Viechle> findByYearBetween (@PathVariable Integer year1,@PathVariable Integer year2){
    return this.viechleBL.findByYearBetween(year1,year2);
  }
  @GetMapping("killo/{killo}")
  public List<Viechle> findBykilloLessThanEqual (@PathVariable Integer killo){
    return this.viechleBL.findBykilloLessThanEqual(killo);
  }
  @GetMapping("color/{color}")
  public List<Viechle> findBycolorEquals (@PathVariable String color){
    return this.viechleBL.findBycolorEquals(color);
  }

  @GetMapping("owners/{owners}")
  public List<Viechle> findByNumberOfOwnersLessThanEqual (@PathVariable Integer owners){
    return this.viechleBL.findByNumberOfOwnersLessThanEqual(owners);
  }
  @GetMapping("manuf/{manuf}")
  public List<Viechle> findByManufEquals (@PathVariable String manuf){
    return this.viechleBL.findByManufEquals(manuf);
  }



  @DeleteMapping("{id}")
    public ResponseEntity<?> deleteViechleById(@PathVariable int id){
    this.viechleBL.deleteViechle(id);
    return ResponseEntity.noContent().build();
  }

}


