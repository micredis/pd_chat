package dplatonov.pd_chat.model;

import java.io.Serializable;

public class GenericModel<L, R> implements Serializable {

  private static final long serialVersionUID = -2601709947580067626L;
  private L l;
  private R r;

  public L getL() {
    return l;
  }

  public void setL(L l) {
    this.l = l;
  }

  public R getR() {
    return r;
  }

  public void setR(R r) {
    this.r = r;
  }

  @Override
  public String toString() {
    return "GenericModel{" + "l=" + l + ", r=" + r + '}';
  }
}
