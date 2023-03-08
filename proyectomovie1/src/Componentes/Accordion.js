import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dolor de Estomago</Accordion.Header>
        <Accordion.Body>
          <p>
            Manzanilla: una infusión de manzanilla puede ayudar a aliviar el
            dolor y la inflamación del estómago. Para hacerla, se puede agregar
            una cucharadita de flores de manzanilla a una taza de agua caliente
            y dejar reposar durante unos 10 minutos antes de tomarla.
          </p>
          <p>
            Menta: también se puede hacer una infusión de menta para aliviar el
            dolor de estómago y la indigestión. Se pueden usar tanto hojas
            frescas como secas. Para hacer la infusión, se puede agregar una
            cucharadita de hojas de menta a una taza de agua caliente y dejar
            reposar durante unos 10 minutos antes de tomarla.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Infecciones respiratorias</Accordion.Header>
        <Accordion.Body>
          <p>
            Echinacea: se cree que la echinacea puede ayudar a fortalecer el
            sistema inmunológico y prevenir infecciones respiratorias. Se puede
            tomar en forma de té o suplemento. Para hacer el té, se puede
            agregar una cucharadita de raíz de echinacea a una taza de agua
            caliente y dejar reposar durante unos 10 minutos antes de tomarla.
          </p>
          <p>
            Tomillo: se cree que el tomillo tiene propiedades antimicrobianas y
            puede ayudar a aliviar la congestión nasal y la tos. Se puede hacer
            una infusión de tomillo agregando una cucharadita de hojas secas a
            una taza de agua caliente y dejar reposar durante unos 10 minutos
            antes de tomarla.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Insomnio</Accordion.Header>
        <Accordion.Body>
          <p>
            Lavanda: se cree que la lavanda tiene propiedades calmantes y
            relajantes y puede ayudar a mejorar la calidad del sueño. Se puede
            agregar unas gotas de aceite esencial de lavanda a un difusor o
            almohada para inhalar su aroma antes de dormir.
          </p>
          <p>
            Valeriana: se cree que la valeriana puede ayudar a reducir la
            ansiedad y mejorar la calidad del sueño. Se puede tomar en forma de
            té o suplemento. Para hacer el té, se puede agregar una cucharadita
            de raíz de valeriana a una taza de agua caliente y dejar reposar
            durante unos 10 minutos antes de tomarla.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Anciedad</Accordion.Header>
        <Accordion.Body>
          <p>
            Hierba de San Juan: se cree que la hierba de San Juan puede ayudar a
            aliviar la ansiedad y la depresión leve a moderada. Se puede tomar
            en forma de té o suplemento. Para hacer el té, se puede agregar una
            cucharadita de hierba seca a una taza de agua caliente y dejar
            reposar durante unos 10 minutos antes de tomarla.
          </p>
          <p>
            Manzanilla: la manzanilla también puede ayudar a aliviar la ansiedad
            y el estrés. Se puede hacer una infusión de manzanilla como se
            describió anteriormente.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>dolor de cabeza</Accordion.Header>
        <Accordion.Body>
          <p>
            Menta: se cree que la menta puede ayudar a aliviar el dolor de
            cabeza y la migraña. Se puede aplicar aceite esencial de menta
            diluido en la sien o frente, o inhalar su aroma a través de un
            difusor o inhalador.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Dolor articular</Accordion.Header>
        <Accordion.Body>
          Error 404: La información que buscas no ha sido encontrada
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;
