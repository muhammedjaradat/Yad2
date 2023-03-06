package tsofen.yad2.beans;


import javax.persistence.*;

@Entity
@Table(name = "viechles")
public class Viechle {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private  String color;
  private String manuf;
  private Integer killo;
  private  Integer numberOfOwners;
  private  Integer cost;

  private Integer year;

  public Viechle() {
  }

  public Viechle(String color, String manuf, Integer killo, Integer numberOfOwners, Integer cost, Integer year) {
    this.color = color;
    this.manuf = manuf;
    this.killo = killo;
    this.numberOfOwners = numberOfOwners;
    this.cost = cost;
    this.year = year;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public void setManuf(String manuf) {
    this.manuf = manuf;
  }

  public void setKillo(Integer killo) {
    this.killo = killo;
  }

  public void setNumberOfOwners(Integer numberOfOwners) {
    this.numberOfOwners = numberOfOwners;
  }

  public void setCost(Integer cost) {
    this.cost = cost;
  }

  public void setYear(Integer year) {
    this.year = year;
  }

  public Integer getId() {
    return id;
  }

  public String getColor() {
    return color;
  }

  public String getManuf() {
    return manuf;
  }

  public Integer getKillo() {
    return killo;
  }

  public Integer getNumberOfOwners() {
    return numberOfOwners;
  }

  public Integer getCost() {
    return cost;
  }

  public Integer getYear() {
    return year;
  }

  @Override
  public String toString() {
    return "Viechle{" +
      "id=" + id +
      ", color='" + color + '\'' +
      ", manuf='" + manuf + '\'' +
      ", killo=" + killo +
      ", numberOfOwners=" + numberOfOwners +
      ", cost=" + cost +
      ", year=" + year +
      '}';
  }
}
