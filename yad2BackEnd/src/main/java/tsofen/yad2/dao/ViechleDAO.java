package tsofen.yad2.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tsofen.yad2.beans.Viechle;

import java.util.List;

public interface ViechleDAO extends JpaRepository<Viechle,Integer> {

  List <Viechle> findBycostBetween(Integer cost1,Integer cost2);
  List <Viechle> findByYearBetween(Integer year1,Integer year2);

  List <Viechle> findBykilloLessThanEqual(Integer killo);
  List <Viechle> findBycolorEquals(String color);
  List <Viechle> findByManufEquals(String manuf);
  List <Viechle> findByNumberOfOwnersLessThanEqual(Integer numberffowners );

//  List <Viechle> findByCostLessThanEqual(Integer Cost);

//  List<Viechle> findByCostLessThanEqualOrCostGreaterThan(Float grade);// ??? How To show greater or less in range 5000

}
