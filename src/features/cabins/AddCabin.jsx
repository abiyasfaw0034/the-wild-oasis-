import Button from "../../ui/Button";
import CreateEditCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
// import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens={"cabins-form"}>
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name={"cabins-form"}>
          <CreateEditCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens={"table"}>
      <Button>Show table</Button>
    </Modal.Open>
    <Modal.Window name={"table"}>
      <CabinTable />
    </Modal.Window> */}
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);
//   const onClose = () => setisOpenModal(false);
//   return (
//     <div>
//       <Button onClick={() => setisOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={onClose}>
//           <CreateEditCabinForm onCloseModal={onClose} />
//         </Modal>
//       )}
//     </div>
//   );
// }
