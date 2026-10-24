package br.senai.pa.lista07;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TimeTest1 {

	public Time time;
	
	@BeforeEach
	public void setup() {
		time = new Time("Bahia", "Rogerio Ceni");
		for(Integer i = 1; i <= 12; i++) {
			time.contratarJogador("nome" + i, i);
		}
	}
	
	@Test
	public void escalarMaximoJogadoresTitulares() {
		for(Integer i = 1; i <= 11; i++) {
			time.escalarJogador("nome" + i, SituacaoEscalacaoEnum.TITULAR);
		}
		Assert.assertFalse(time.escalarJogador("nome12", SituacaoEscalacaoEnum.TITULAR));
	}

}
