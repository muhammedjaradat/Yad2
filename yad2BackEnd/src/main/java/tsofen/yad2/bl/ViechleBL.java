package tsofen.yad2.bl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tsofen.yad2.beans.Viechle;
import tsofen.yad2.dao.ViechleDAO;
import tsofen.yad2.exceptions.VichleAlreadyExistException;

import java.util.List;

@Service
public class ViechleBL {

  @Autowired
  ViechleDAO viechleDAO;

  public Viechle addViechle (Viechle viechle) {
  return this.viechleDAO.save(viechle);
  }

  public void deleteViechle (int id) {
     this.viechleDAO.deleteById(id);
  }

  public List<Viechle> findBycostBetween (Integer cost1,Integer cost2) {
    return this.viechleDAO.findBycostBetween(cost1,cost2);
  }

  public List<Viechle> findByYearBetween (Integer year1,Integer year2) {
    return this.viechleDAO.findByYearBetween(year1,year2);
  }

  public List<Viechle> findByNumberOfOwnersLessThanEqual (Integer owners) {
    return this.viechleDAO.findByNumberOfOwnersLessThanEqual(owners);
  }

  public List<Viechle> findBycolorEquals (String color) {
    return this.viechleDAO.findBycolorEquals(color);
  }

  public List<Viechle> findByManufEquals(String manuf) {
    return this.viechleDAO.  findByManufEquals(manuf);
  }

  public List<Viechle> findBykilloLessThanEqual (Integer killo) {
    return this.viechleDAO.findBykilloLessThanEqual(killo);
  }




public List<Viechle> getAllViechels(){return  this.viechleDAO.findAll();}




}
