def read_file_to_array(filename):
    lines_array = []
    try:
        with open(filename, 'r') as file:
            for line in file:
                lines_array.append(line.strip())
        print("File read successfully!")
        print("Contents stored in array:")
        print(lines_array)

    except EOFError:
        print("Error: No input provided.")

    except FileNotFoundError:
        print("Error: File not found.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Make sure this line is at the very left, no tabs before it
filename = "sample.txt"
read_file_to_array(filename)
